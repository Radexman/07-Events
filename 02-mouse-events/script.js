// ============ 02 Mouse Events ============= //

const logo = document.querySelector('img');

const onClick = () => console.log('Click event');
const onDoubleClick = () => console.log('Double click event');
const onRightMouse = () => console.log('Right click event');
const onMouseDown = () => console.log('Mouse down event');
const onMouseUp = () => console.log('Mouse up');
const onWheel = () => console.log('Wheel');
const onMouseOver = () => console.log('Mouse Over');
const onMouseOut = () => console.log('Mouse Out');
const onDragStart = () => console.log('Drag Start Event');
const onDrag = () => console.log('Drag Event');
const onDragEnd = () => console.log('Drag End Event');

// Button
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightMouse);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onWheel);
// Hover
logo.addEventListener('mousemove', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
// Drag
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
