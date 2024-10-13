let numbers = [];

for (let i = 1; i <= 10; i++) {
	let num = parseFloat(prompt(`Enter number ${i}:`));
	numbers.push(num);
}

let highestNumber = Math.max(...numbers);

console.log(`The highest number is: ${highestNumber}`);
