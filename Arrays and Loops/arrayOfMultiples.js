function arrayMultiplos(number, length) {
	const multiples = [];
	for (let i = 1; i <= length; i++) {
		multiples.push(number * i);
	}
	return multiples;
}

// Test cases
console.log(arrayMultiplos(2, 10)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6)); // [17, 34, 51, 68, 85, 102]
