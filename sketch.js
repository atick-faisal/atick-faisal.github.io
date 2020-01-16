/*
      Author  : Atick Faisal
      Date    : 16 Jan, 2020
*/

//------------- Window Size --------------//
const windowWidth = 600;
const windowHeight = 400;
//------------- Lorenz Params ------------//
const sigma = 10;
const beta = 8.0/3.0;
const rho = 28;
var dt = 0.001;
//----------------------------------------//
let x = [];
let y = [];
let z = [];
//----------------------------------------//
let lineColors = [];
let points = [];
//--------- Number of particles ----------//
const numParticles = 500;
//----------------------------------------//

////////////////////////////////////////////////////////////////////////////////
function preload() {
  backgroundImage = loadImage('assets/sketch_bg.png');
}
////////////////////////////////////////////////////////////////////////////////
function __randomize() {
  for(let i = 0; i < numParticles; i++) {
    x[i] = random(-100, 100);
    y[i] = random(-10, 10);
    z[i] = random(-100, 100);
    lineColors[i] = color(random(30, 225), random(30, 225), random(3, 225), 255);
  }
  dt = 0.001;
}
////////////////////////////////////////////////////////////////////////////////
function __calculate_attractor(i) {
  let dx = sigma * (y[i] - x[i]) * dt;
  let dy = (x[i] * (rho - z[i]) - y[i]) * dt;
  let dz = (x[i] * y[i] - beta * z[i]) * dt;
  x[i] = x[i] + dx;
  y[i] = y[i] + dy;
  z[i] = z[i] + dz;
}
////////////////////////////////////////////////////////////////////////////////
function setup() {
  var mCanvas = createCanvas(windowWidth, windowHeight);
  mCanvas.parent("canvas_id");
  noStroke();
  __randomize();
}
////////////////////////////////////////////////////////////////////////////////
function draw() {
  translate(width/2, 0);
  background(255);
  image(backgroundImage, -width/2, 0, width, height);
  for(let i = 0; i < numParticles; i++) {
    __calculate_attractor(i);
    fill(lineColors[i]);
    ellipse(x[i] * 13, z[i] * 7, 3);
  }
  if(dt < 0.01) {
    dt += 0.00001;
  }
}
////////////////////////////////////////////////////////////////////////////////
function mouseClicked() {
  __randomize();
}
