import React from "react";
import Sketch from "react-p5";

const windowWidth = 700;
const windowHeight = 500;

let particles = [];
let colors = [];
const nParticles = 700;

let alpha = 100;

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
    const setup = (p5, canvasParentRef) => {
        var mCanvas = p5.createCanvas(windowWidth, windowHeight);
        mCanvas.parent(canvasParentRef);
        p5.strokeWeight(1.5);
        p5.stroke(42);
        initialize(p5);
    };

    const draw = (p5) => {
        if (alpha > 10) alpha -= 0.1;
        p5.translate(p5.width / 2, 0);
        p5.background(255, alpha);
        for (let i = 0; i < nParticles; i++) {
            let oldParticle = particles[i].copy();
            update(i);
            let newParticle = particles[i].copy();
            p5.stroke(colors[i]);
            p5.line(
                oldParticle.x * 15,
                p5.height - oldParticle.z * 8,
                newParticle.x * 15,
                p5.height - newParticle.z * 8
            );
        }
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
    };

    const update = (i) => {
        particles[i].update();
    };

    return <Sketch setup={setup} draw={draw} />;
}
