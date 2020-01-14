let sigma = 10;
let beta = 8.0/3.0;
let rho = 28;
let x = [];
let y = [];
let z = [];
let cols = [];
let points = [];
let dt = 0.001;
let num = 500;

function preload() {
  img = loadImage('assets/sketch_bg.png');
}

function setup() {
  var mCanvas = createCanvas(600, 400);
  mCanvas.parent("canvas_id");
  for(let i = 0; i < num; i++) {
    x[i] = random(-100, 100);
    y[i] = random(-10, 10);
    z[i] = random(-100, 100);
    cols[i] = color(random(30, 225), random(30, 225), random(3, 225), 255);
  }
}

function draw() {
  translate(width/2, 0);
  background(255);
  image(img, -width/2, 0, width, height);
  noStroke();
  ////////////////////////////////////////
  for(let i = 0; i < num; i++) {
    let dx = sigma * (y[i] - x[i]) * dt;
    let dy = (x[i] * (rho - z[i]) - y[i]) * dt;
    let dz = (x[i] * y[i] - beta * z[i]) * dt;
    x[i] = x[i] + dx;
    y[i] = y[i] + dy;
    z[i] = z[i] + dz;
    fill(cols[i]);
    ellipse(x[i] * 13, z[i] * 7, 3);
  }
  if(dt < 0.01) {
    dt += 0.00001;
  }
}
