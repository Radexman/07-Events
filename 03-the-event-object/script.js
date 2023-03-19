// =========== 03 The Event Object ============ //

const logo = document.querySelector('img');

function onClick(e) {
	console.log(e.target);
	console.log(e.currentTarget);
	console.log(e.type);
	console.log(e.timeStamp);
	console.log(e.clientX, e.clientY);
	console.log(e.offsetX, e.offsetY);
	console.log(e.pageX, e.pageY);
	console.log(e.screenX, e.screenY);
}

logo.addEventListener('click', onClick);

// document.body.addEventListener('click', (e) => {
// 	console.log(e.target);
// 	console.log(e.currentTarget);
// });

document.querySelector('.outer-link').addEventListener('click', (e) => {
	e.preventDefault();
	console.log('Action Stopped');
});

const onDrag = (e) => {
	document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
};

logo.addEventListener('drag', onDrag);
