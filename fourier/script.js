
var slider1 = document.getElementById("steps");
var slider2 = document.getElementById("speed");

slider1.oninput = function() {
	steps = this.value;
}

slider2.oninput = function() {
	speed = this.value;
}

function sqwave() {
	selector = 1;
}

function swave() {
	selector = 2;
}

function twave() {
	selector = 3;
}