import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import Sketch from "react-p5";

let particles = [];
let colors = [];
let nParticles = 300;

let alpha = 100;
let widthScaler = 13.0;
let heightScaler = 8.0;

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

export default function Butterfly() {
    const { darkMode } = useContext(ThemeContext);

    const setup = (p5, canvasParentRef) => {
        let canvasWidth = getWidth();
        let canvasHeight = getHeight();
        widthScaler = getWidthScaler(canvasWidth);
        heightScaler = getHeightScaler(canvasHeight);
        nParticles = getNumberOfParticles();

        p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
        p5.strokeWeight(1.5);
        p5.stroke(42);
        initialize(p5);
    };

    const draw = (p5) => {
        if (alpha > 10) alpha -= 0.2;
        p5.translate(p5.width / 2, 0);

        if (darkMode) {
            p5.background(46, 52, 64, alpha);
        } else {
            p5.background(236, 239, 244, alpha);
        }

        for (let i = 0; i < nParticles; i++) {
            let oldParticle = particles[i].copy();
            update(i);
            let newParticle = particles[i].copy();
            p5.stroke(colors[i]);
            p5.line(
                oldParticle.x * widthScaler,
                p5.height - oldParticle.z * heightScaler,
                newParticle.x * widthScaler,
                p5.height - newParticle.z * heightScaler
            );
        }
    };

    const mouseClicked = (p5) => {
        initialize(p5);
    };

    const initialize = (p5) => {
        for (let i = 0; i < nParticles; i++) {
            particles[i] = new LorentzParticle(0, 0, 0);
            particles[i].randomize();
            colors[i] = p5.color(
                p5.random(26, 232),
                p5.random(35, 234),
                p5.random(126, 246)
            );
        }
        alpha = 100;
    };

    const update = (i) => {
        particles[i].update();
    };

    const getNumberOfParticles = () => {
        let { innerWidth: width } = window;
        if (width < 481) return 100;
        else return 300;
    };

    const getWidth = () => {
        let { innerWidth: width } = window;
        if (width > 1370) return width * 0.5;
        if (width > 720) return width * 0.6;
        else return width * 0.9;
    };

    const getHeight = () => {
        let width = getWidth();
        return width * 0.6;
    };

    const getWidthScaler = (canvasWidth) => {
        return (13.0 / 600.0) * canvasWidth;
    };

    const getHeightScaler = (canvasHeight) => {
        return (7.0 / 400.0) * canvasHeight;
    };

    return <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />;
}
