let openDoors = 0;
let auxArray = [];
let lastTries = null;
let tries = 0;
let isGameOver = false;

/* TESTE */
while (!isGameOver) {
	play();
	lastTries = null;
}

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
	const areArrayElementsTheSame = array.every(
		(curr, i, arr) => arr[0] === curr
	);
	const areArraysEqual = areArraysTheSame(array, auxArray);

	if (areArrayElementsTheSame || areArraysEqual) {
		++openDoors;

		console.log(`Porta ${openDoors}: aberta!`);
	}

	auxArray = array;
	tries++;

	isWinner();
}

function areArraysTheSame(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

function isWinner() {
	if (openDoors < 3) return false;

	console.log(`Parabéns você venceu!`);
	console.log(`Tentativas: ${tries}`);
	lastTries
		? console.log(`Sua última vitória foi em: ${lastTries} tentativas`)
		: null;
	console.log(`Todas as portas foram fechadas!`);

	resetGame();

	return true;
}

function resetGame() {
	openDoors = 0;
	lastTries = tries;
	tries = 0;
	auxArray = [];
	isGameOver = true;
}
