// ============= 06 Input Events ============= //

const itemInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority-input');
const checkbox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');

const onInput = (e) => {
	heading.textContent = e.target.value;
};

const onCheck = (e) => {
	heading.textContent = checkbox.checked ? 'Checked' : 'Unchecked';
};

const onFocus = (e) => {
	itemInput.style.outline = '1px solid green';
};

const onBlur = (e) => {
	itemInput.style.outline = 'none';
};

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
