function done() {
	locusCaptured = true;
	dftX = dft(locusX);
	dftY = dft(locusY);
	dftX.sort((a, b) => b.magnitude - a.magnitude);
	dftY.sort((a, b) => b.magnitude - a.magnitude);
}

function reset() {
	locusCaptured = false;
	locus = [];
	locusX = [];
	locusY = [];
	dftX = [];
	dftY = [];
	pathX = [];
	pathY = [];
	time = 0;
}