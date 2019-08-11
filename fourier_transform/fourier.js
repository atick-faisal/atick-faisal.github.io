function dft(x) {
	let X = [];

	let re = 0;
	let im = 0;

	const N = x.length;

	for(let k = 0; k < N; k++) {

		for(let n = 0; n < N; n++) {
			re += x[n] * cos((TWO_PI * k * n) / N);
			im -= x[n] * sin((TWO_PI * k * n) / N);
		}

		re = re / N;
		im = im / N;

		magnitude = sqrt(re * re + im * im);
		phase = atan2(im , re);
		frequency = k;

		X[k] = { magnitude, frequency, phase};
	}

	return X;
}
