import {useCallback, useContext, useEffect, useRef} from "react";
import {ThemeContext} from "../contexts/theme-context";

class LorentzParticle {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.sigma = 10;
        this.beta = 8.0 / 2.5;
        this.rho = 28;
        this.dt = 0.001;
    }

    randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomize() {
        this.x = this.randInt(-100, 100);
        this.y = this.randInt(-10, 10);
        this.z = this.randInt(-100, 100);
        this.dt = 0.001;
    }

    update() {
        this.x += this.sigma * (this.y - this.x) * this.dt;
        this.y += (this.x * (this.rho - this.z) - this.y) * this.dt;
        this.z += (this.x * this.y - this.beta * this.z) * this.dt;
        if (this.dt < 0.01) this.dt += 0.00001;
    }

    copy() {
        return new LorentzParticle(this.x, this.y, this.z);
    }
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default function Butterfly() {
    const {darkMode} = useContext(ThemeContext);
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const colorsRef = useRef([]);
    const animationIdRef = useRef(null);
    const alphaRef = useRef(100);

    const getNumberOfParticles = () => {
        return window.innerWidth < 481 ? 100 : 300;
    };

    const getWidth = useCallback(() => {
        const width = window.innerWidth;
        if (width > 1370) return width * 0.5;
        if (width > 720) return width * 0.6;
        return width * 0.9;
    }, []);

    const getHeight = useCallback(() => {
        const width = getWidth();
        return width * 0.6;
    }, [getWidth]);

    const getWidthScaler = (canvasWidth) => (13.0 / 600.0) * canvasWidth;
    const getHeightScaler = (canvasHeight) => (7.0 / 400.0) * canvasHeight;

    const initialize = useCallback((ctx, canvasWidth, canvasHeight) => {
        const nParticles = getNumberOfParticles();
        const particles = [];
        const colors = [];

        for (let i = 0; i < nParticles; i++) {
            const p = new LorentzParticle(0, 0, 0);
            p.randomize();
            particles.push(p);
            colors.push(`rgb(${rand(26, 232)}, ${rand(35, 234)}, ${rand(126, 246)})`);
        }

        particlesRef.current = particles;
        colorsRef.current = colors;

        ctx.fillStyle = darkMode ? `rgb(46, 52, 64)` : `rgb(255, 255, 255)`;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }, [darkMode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const canvasWidth = getWidth();
        const canvasHeight = getHeight();
        const nParticles = getNumberOfParticles();
        const widthScaler = getWidthScaler(canvasWidth);
        const heightScaler = getHeightScaler(canvasHeight);

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        alphaRef.current = 100;

        initialize(ctx, canvasWidth, canvasHeight);

        let isCancelled = false;

        const draw = () => {
            if (isCancelled) return;

            if (alphaRef.current > 10) alphaRef.current -= 0.2;

            ctx.fillStyle = darkMode
                ? `rgba(46, 52, 64, ${alphaRef.current / 100})`
                : `rgba(255, 255, 255, ${alphaRef.current / 100})`;

            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.translate(canvas.width / 2, 0);

            for (let i = 0; i < nParticles; i++) {
                const particles = particlesRef.current;
                const colors = colorsRef.current;

                const oldP = particles[i].copy();
                particles[i].update();
                const newP = particles[i].copy();

                ctx.strokeStyle = colors[i];
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(oldP.x * widthScaler, canvas.height - oldP.z * heightScaler);
                ctx.lineTo(newP.x * widthScaler, canvas.height - newP.z * heightScaler);
                ctx.stroke();
            }

            ctx.restore();
            animationIdRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            isCancelled = true;
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [darkMode, getWidth, getHeight, initialize]);

    const handleCanvasClick = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const canvasWidth = getWidth();
        const canvasHeight = getHeight();
        initialize(ctx, canvasWidth, canvasHeight);
    };

    return (
        <canvas
            ref={canvasRef}
            style={{display: "block"}}
            onClick={handleCanvasClick}
        />
    );
}