// =========== 03 The Event Object ============ //

const logo = document.querySelector('img');

// logo.addEventListener('click', (e) => {
// 	console.log(e);
// });

const onClick = (e) => {
	console.log(e.target);
	console.log(e.currentTarget);
	console.log(e.type);
	console.log(e.timeStamp);
	console.log(e.clientX, e.clientY);
	console.log(e.offsetX, e.offsetY);
	console.log(e.pageX, e.pageY);
	console.log(e.screenX, e.screenY);
};

// logo.addEventListener('click', onClick);
// document.body.addEventListener('click', (e) => {
// 	console.log(e.target);
// 	console.log(e.currentTarget);
// });

logo.addEventListener('drag', (e) => {
	document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
});

document.querySelector('.outer-link').addEventListener('click', (e) => {
	e.preventDefault();
	console.log('Link clicked');
});
