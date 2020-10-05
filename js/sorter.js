/*
 * This function shuffles an array into a random order.
 */
function shuffle(a) {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
}

/*
 * This function generates an array of shuffled odd integers of length n,
 * with values from 1 to n.
 */
function generateRandomArray(n) {
	a = [...Array(n + 1).keys()].slice(1, n + 1);
	for (let i = 0; i < a.length; i++) {
		a[i] = a[i] * 2 + 1;
	}
	shuffle(a);
	return a;
}

/*
 * Performs a flip operation, with the element at the provided index as the bottom
 * of the flipped pile. The flip operation is performed in place (the original 
 * array is modified), but the array is returned to the user for convenience.
 */
function flip(arr, flipIndex) {
	for(let i = 0; i < (flipIndex / 2); i++) {
		let top = arr[i];
		let bottom = arr[flipIndex - i];
		arr[i] = bottom;
		arr[flipIndex - i] = top;
	}

	console.log(arr);
	return arr;
}

/*
 * Flips groups of pancakes such that, when the function returns, every pancake
 * is smaller than the pancake below it. Assume the top pancake has index 0.
 * The arrange operation is performed in place (the original array is modified), 
 * but the array is returned to the user for convenience.
 */
function arrangePancakes(arr) {
	let arrLength = arr.length;

	while (arrLength > 1) {

		// findMax
		let maxIndex = 0;
		for (let i = 0; i < arrLength; i++) {
			if (arr[i] > arr[maxIndex]) {
				maxIndex = i;
			}
		}

		arr = flip(arr, maxIndex);
		arr = flip(arr, arrLength - 1);

		arrLength--;
	}

	return arr;
}
