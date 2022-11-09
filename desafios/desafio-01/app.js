let acc = 0;
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
		console.log(`Porta ${acc}: aberta!`);

		if (acc > 2) {
			console.log(`Parabéns você venceu!`);
			console.log(`Todas as portas foram fechadas!`);
			acc = 0;
			auxArray = [];
			return;
		}
	}

	if (acc < 1) {
		if (isDoorOpen) {
			console.log(`Porta ${++acc}: aberta!`);
			auxArray = array;
		} else {
			console.log(`Tente de novo!`);
		}
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
