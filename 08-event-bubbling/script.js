// =========== 09 Event Delegation ============ //

// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// listItems.forEach((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.target.remove();
// 	});
// });

// list.addEventListener('click', (e) => {
// 	e.target.tagName === 'LI' ? e.target.remove() : null;
// });

// list.addEventListener('mouseover', (e) => {
// 	e.target.tagName === 'LI' ? (e.target.style.color = 'red') : null;
// });
const items = document.querySelectorAll('li');
const list = document.querySelector('ul');

// items.forEach((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.target.remove();
// 	});
// });

list.addEventListener('click', (e) => {
	e.target.tagName === 'LI' ? e.target.remove() : null;
});
