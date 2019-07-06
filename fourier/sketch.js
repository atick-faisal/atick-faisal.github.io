
function setup() {
	let canvas = createCanvas(640, 320);
	canvas.parent('sketch_holder');
}

let time = 0;
let dataX = [];
let dataY = [];
let radius = 60;
let steps = 3;
let speed = 30;
let selector = 1;


function draw() {
 	background(239);
 	translate(160, 160);

 	stroke(140);

 	let x = 0;
	let y = 0;
	var n = 1;
	var a = 1;
	var d = 1;
	var phi = 0;

 	for(let i = 0; i < steps; i++) {

 		if(selector == 1) {
 			n = ((i * 2) + 1);
			d = n * PI;
			a = 4;
 		}
 		else if(selector == 2) {
 			a = 1;
	 		n = i + 1;
	 		if(i % 2 == 0) {
	 			d = -(i + 1);
	 		} 
	 		else {
	 			d = i + 1;
	 		}
 		}
 		else {
 			a = -1;
			n = (i * 2) + 1;
			d = n * n;
			phi = HALF_PI;
 		}	

 		let newRadius = abs((radius * a) / d);

 		let prevX = x;
 		let prevY = y;

 		x += newRadius * cos(n * time + phi);
	 	y += newRadius * sin(n * time + phi);

 		// draw the fundamental harmonic

	 	strokeWeight(2);
	 	stroke(100);
	 	noFill();
	 	ellipse(prevX, prevY, 2 * newRadius, 2 * newRadius);

 		// draw the green dot pointer

	 	

	 	stroke(100);
 		line(prevX, prevY, x, y);

 		fill(239, 83, 80);
	 	noStroke();
	 	ellipse(prevX, prevY, 12 - i, 12 - i);
 	}

 	
 	dataX.unshift(x);
 	dataY.unshift(y);

 	stroke(140);
 	line(x, y, 160, y);

 	noStroke();
 	fill(239, 83, 80);
 	ellipse(x, y, 8);

 	noStroke();
 	fill(239, 83, 80);
 	ellipse(160, y, 8);
 	

 	translate(160, 0);


 	stroke(239, 83, 80);
 	strokeWeight(2);
 	beginShape();
 	for(let i = 0; i <= dataX.length; i++) {
 		noFill();
 		vertex(i, dataY[i]);
 	}
 	endShape();

 	time -= (speed / 700);

 	if(dataX.length > 500) {
 		dataX.pop();
 		dataY.pop();
 	}
}