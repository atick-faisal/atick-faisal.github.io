import React from "react";
import Sketch from "react-p5";

//------------- Window Size --------------//
const windowWidth = 600;
const windowHeight = 400;
//------------- Lorenz Params ------------//
const sigma = 10;
const beta = 8.0 / 3.0;
const rho = 28;
var dt = 0.001;
//----------------------------------------//
let x = [];
let y = [];
let z = [];
//----------------------------------------//
let lineColors = [];
// let points = [];
//--------- Number of particles ----------//
const numParticles = 500;
//----------------------------------------//
// var backgroundImage = null;

export default function Butterfly(props) {
    ////////////////////////////////////////////////////////////////////////////////
    const preload = (p5) => {
        // p5.backgroundImage = p5.loadImage("../assets/sketch_bg.png");
    };

    const setup = (p5, canvasParentRef) => {
        var mCanvas = p5.createCanvas(windowWidth, windowHeight);
        mCanvas.parent(canvasParentRef);
        p5.noStroke();
        __randomize(p5);
    };

    const draw = (p5) => {
        p5.translate(p5.width / 2, 0);
        p5.background(255);
        // p5.image(p5.backgroundImage, -p5.width/2, 0, p5.width, p5.height);
        for (let i = 0; i < numParticles; i++) {
            __calculate_attractor(i);
            p5.fill(lineColors[i]);
            p5.ellipse(x[i] * 13, p5.height - z[i] * 7, 3);
        }
        if (dt < 0.01) {
            dt += 0.000005;
        }
    };

    const __randomize = (p5) => {
        for (let i = 0; i < numParticles; i++) {
            x[i] = p5.random(-100, 100);
            y[i] = p5.random(-10, 10);
            z[i] = p5.random(-100, 100);
            lineColors[i] = p5.color(
                p5.random(30, 225),
                p5.random(30, 225),
                p5.random(3, 225),
                255
            );
        }
        dt = 0.001;
    };

    const __calculate_attractor = (i) => {
        let dx = sigma * (y[i] - x[i]) * dt;
        let dy = (x[i] * (rho - z[i]) - y[i]) * dt;
        let dz = (x[i] * y[i] - beta * z[i]) * dt;
        x[i] = x[i] + dx;
        y[i] = y[i] + dy;
        z[i] = z[i] + dz;
    };

    return <Sketch prelod={preload} setup={setup} draw={draw} />;
}
