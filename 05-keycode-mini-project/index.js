// ===== 05 Keycode Mini Project ===== //

const key = document.querySelector('#key');
const keycode = document.querySelector('#keycode');
const code = document.querySelector('#code');
const body = document.querySelector('body');

const getKeys = (e) => {
	key.textContent = `${e.key}`;
	keycode.textContent = `${e.keyCode}`;
	code.textContent = `${e.code}`;
};

body.addEventListener('keydown', getKeys);
