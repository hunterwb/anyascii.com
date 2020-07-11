import anyAscii from 'https://cdn.skypack.dev/pin/any-ascii@v0.2.0-vw87GjMzzrPqyJymfRCZ/mode=imports/optimized/any-ascii.js';

const input = document.getElementById('input');

input.addEventListener('input', () => {
	const input = document.getElementById('input');
	const output = document.getElementById('output');
	output.value = anyAscii(input.value);
});
