function sumResistance(resistances) {
	const totalResistance = resistances.reduce(
		(sum, resistance) => sum + Math.abs(resistance),
		0,
	);
	return `${totalResistance} ohms`;
}

// Test cases
console.log(sumResistance([-1, 5, 6, 3]));
console.log(sumResistance([14, 3.5, 6]));
console.log(sumResistance([8, 15, 100]));
