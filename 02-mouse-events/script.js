// ============ 02 Mouse Events ============= //

const logo = document.querySelector('img');

const onClick = () => console.log('Click event');
const onDoubleClick = () => {
	if (document.body.style.backgroundColor !== 'purple') {
		document.body.style.backgroundColor = 'purple';
		document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}
};
const onRightClick = () => console.log('Right click event');
const onMouseDown = () => console.log('Mouse down');
const onMouseUp = () => console.log('Mouse up');
const onWheel = () => console.log('Wheel');
const onMouseOver = () => console.log('Mouse Over');
const onMouseOut = () => console.log('Mouse Out');
const onDragStart = () => console.log('Drag Start');
const onDragEnd = () => console.log('Drag End');
const onDrag = () => console.log('Drag');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
