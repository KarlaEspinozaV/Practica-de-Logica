function secretName(members) {
	const secret = members.map((member) => member.charAt(0)).join("");
	return secret.toUpperCase();
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(
	secretName(["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]),
);
console.log(secretName(["Harry", "Ron", "Hermione"]));
