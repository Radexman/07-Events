// ===== 05 Keycode Mini Project ===== //

/* <div class="card">
Key
<p id="key">K</p>
</div> */

const container = document.querySelector('.container');

const getKeys = (e) => {
	const keys = {
		key: `${e.key}`,
		keycode: `${e.keyCode}`,
		code: `${e.code}`,
	};
	container.innerHTML = '';
	for (const key in keys) {
		const div = document.createElement('div');
		const divText = document.createTextNode(key);
		div.appendChild(divText);
		div.classList = 'card';
		const p = document.createElement('p');
		const pText = document.createTextNode(keys[key]);
		p.appendChild(pText);
		div.appendChild(p);
		container.appendChild(div);
	}
};

document.body.addEventListener('keydown', getKeys);
