// ============= 06 Input Events ============= //

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');

// button.addEventListener('click', () => {
// 	alert('Button was clicked.');
// });

div.addEventListener('click', (e) => {
	alert('Div was clicked.');
});

button.addEventListener('click', (e) => {
	alert('Button was clicked.');
	e.stopPropagation();
});
