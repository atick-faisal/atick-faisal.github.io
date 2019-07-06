let pathx = [];
let pathy = [];
let dftX = [];
let dftY = [];

let locusX = [];
let locusY = [];

let locusCaptured = false;

function setup() {
	let canvas = createCanvas(800, 520);
	canvas.parent('sketch_holder');
	frameRate(30);
}

let time = 0;
let locus = [];
let radius = 10;

function draw() {

	if(!locusCaptured) {
		captureLocus();
	}

	else {
		background(239);
	 	//translate(200, 200);

	 	let f_x = drawCycles(width/2, 100, dftX, 0, true);
	 	let f_y = drawCycles(150, height/2, dftY, HALF_PI, true);

	 	let v = createVector(f_x.x, f_y.y);

	 	locus.unshift(v);

	 	line(f_x.x, f_x.y, v.x, v.y);
	 	line(f_y.x, f_y.y, v.x, v.y);

	 	noStroke();
	 	fill(239, 83, 80);
	 	ellipse(v.x, v.y, 12);

	 	stroke(239, 83, 80);
	 	strokeWeight(2.5);
	 	beginShape();
	 	for(let i = 0; i < locus.length; i++) {
	 		noFill();
	 		vertex(locus[i].x, locus[i].y);
	 	}
	 	endShape();

	 	const dt = (TWO_PI / dftY.length);
	 	time += dt;

	 	if(time >= TWO_PI) {
	 		locus = [];
	 		time = 0;
	 	}
	 }

	 // else {
	 // 	background(242);
	 // 	stroke(70);
	 // 	strokeWeight(2.5);
	 // 	beginShape();
	 // 	for(let i = 0; i < locus.length; i++) {
	 // 		noFill();
	 // 		vertex(locus[i].x, locus[i].y);
	 // 	}
	 // 	endShape();
	 // }
}

function drawCycles(x, y, ft, rotation, show) {

 	for(let i = 0; i < ft.length; i++) {

 		let freq = ft[i].frequency;
 		let magnitude = ft[i].magnitude;
 		let phase = ft[i].phase;


 		let prevX = x;
 		let prevY = y;

 		x += magnitude * cos((freq * time) + phase + rotation);
	 	y += magnitude * sin((freq * time) + phase + rotation);

	 	if(show) {
	 		strokeWeight(1);
		 	stroke(70);
		 	noFill();
		 	ellipse(prevX, prevY, 2 * magnitude, 2 * magnitude);
		 	

		 	stroke(100);
	 		line(prevX, prevY, x, y);
	 	}
 	}

 	return createVector(x, y);
}


function captureLocus() {
	background(242);
	//translate(350, 200);
	noFill();
	stroke(70);
	strokeWeight(2);
	beginShape();
	for(let i = 0; i < locusX.length; i++) {
		vertex(locusX[i] + width/2, locusY[i] + height/2);
	}
	endShape();
}

function keyPressed() {
	if (keyCode === ENTER) {
		locusCaptured = true;
		dftX = dft(locusX);
		dftY = dft(locusY);
		dftX.sort((a, b) => b.magnitude - a.magnitude);
  		dftY.sort((a, b) => b.magnitude - a.magnitude);
	}
}

function mouseDragged() {
  locusX.push(mouseX - width/2);
  locusY.push(mouseY - height/2);
  return false;
}
