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


// Coding Challenge 130.1: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130-fourier-transform-drawing.html
// https://youtu.be/MY4luNgGfms
// https://editor.p5js.org/codingtrain/sketches/jawHqwfda

// function dft(x) {
//   const X = [];
//   const N = x.length;
//   for (let k = 0; k < N; k++) {
//     let re = 0;
//     let im = 0;
//     for (let n = 0; n < N; n++) {
//       const phi = (TWO_PI * k * n) / N;
//       re += x[n] * cos(phi);
//       im -= x[n] * sin(phi);
//     }
//     re = re / N;
//     im = im / N;

//     let freq = k;
//     let amp = sqrt(re * re + im * im);
//     let phase = atan2(im, re);
//     X[k] = { re, im, freq, amp, phase };
//   }
//   return X;
// }
