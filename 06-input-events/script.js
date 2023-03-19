// ============= 06 Input Events ============= //

const inputElement = document.querySelector('#item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.querySelector('#checkbox');

function onInput(e) {
	const h1 = document.querySelector('h1');
	h1.innerText = e.target.value;
}

const onCheck = (e) => {
	const h1 = document.querySelector('h1');
	h1.textContent = checkbox.checked ? 'Checked' : 'Unchecked';
};

const onFocus = (e) => {
	inputElement.classList.add('focus');
};

const onBlur = (e) => {
	inputElement.classList.remove('focus');
};

// inputElement.addEventListener('input', onKeyDown);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onCheck);
inputElement.addEventListener('focus', onFocus);
inputElement.addEventListener('blur', onBlur);
