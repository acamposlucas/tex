let acc = 1;
let auxArray = [];

function createDynamicArray() {
	const arr = [];

	for (let i = 0; i < 3; i++) {
		arr.push(Math.ceil(Math.random() * 3));
	}
	return arr;
}

function play() {
	const array = createDynamicArray();
	console.log(array);
	const isDoorOpen = array.every((curr, i, arr) => arr[0] === curr);

	if (areArraysTheSame(array, auxArray)) {
		++acc;
		return console.log(`Porta ${acc}: aberta!`);
	}

	if (isDoorOpen && acc === 1) {
		console.log(`Porta ${acc}: aberta!`);
		auxArray = array;
	} else {
		console.log(`Tente de novo!`);
	}

	if (acc >= 3) {
		console.log(`Parabéns você venceu!`);
		acc = 1;
		auxArray = [];
	}
}

function areArraysTheSame(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}
