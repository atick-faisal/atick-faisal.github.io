import React from "react";
import Sketch from "react-p5";

const windowWidth = 600;
const windowHeight = 400;

let particles = [];
const nParticles = 700;

class LorentzParticle {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.sigma = 10;
        this.beta = 8.0 / 3.0;
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
        p5.strokeWeight(1);
        p5.stroke(200);
        initialize();
    };

    const draw = (p5) => {
        p5.translate(p5.width / 2, 0);
        p5.background(46, 52, 64);
        for (let i = 0; i < nParticles; i++) {
            let oldParticle = particles[i].copy();
            update(i);
            let newParticle = particles[i].copy();
            p5.line(
                oldParticle.x * 13,
                p5.height - oldParticle.z * 7,
                newParticle.x * 13,
                p5.height - newParticle.z * 7
            );
        }
    };

    const initialize = () => {
        for (let i = 0; i < nParticles; i++) {
            particles[i] = new LorentzParticle(0, 0, 0);
            particles[i].randomize();
        }
    };

    const update = (i) => {
        particles[i].update();
    };

    return <Sketch setup={setup} draw={draw} />;
}
