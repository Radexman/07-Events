// =========== 01 Event Listeners ============ //

const clearBtn = document.querySelector('#clear');
const items = document.querySelectorAll('li');

// const onClear = () => {
// 	alert('Cleared');
// };

// clearBtn.onclick = () => {
// 	console.log('Clear Items');
// };

const onClear = () => {
	items.forEach((item) => item.remove());
	console.log('Items Cleared');
};

clearBtn.addEventListener('click', onClear);

// setTimeout(() => {
// 	clearBtn.removeEventListener('click', onClear);
// }, 5000);

setTimeout(() => {
	clearBtn.click();
}, 5000);
