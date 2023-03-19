// ==== 04 Keyboard Events & Key Properties ==== //

const itemInput = document.querySelector('.form-input');

const onKeyPress = (e) => console.log('Keypress');
const onKeyUp = (e) => console.log('Keyup');

const onKeyDown = (e) => {
	// key
	// if (e.key === 'Enter') {
	// 	alert('You pressed Enter');
	// }
	// keyCode
	if (e.keyCode === 13) {
		alert('You pressed Enter');
	}
	// code
	if (e.code === 'Digit7') {
		alert('You pressed 7');
	}

	if (e.repeat) {
		console.log('You are holding down ' + e.key);
	}

	// console.log('Shift: ' + e.shiftKey);

	// console.log('Control: ' + e.ctrlKey);

	console.log('Alt: ' + e.altKey);
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
