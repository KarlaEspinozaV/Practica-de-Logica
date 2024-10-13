const userInput = prompt("Please enter a word or sentence:");

function isPalindrome(str) {
	const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
	const reversedStr = cleanedStr.split("").reverse().join("");
	if (cleanedStr === reversedStr) {
		console.log(`"${userInput}" is a palindrome.`);
	} else {
		console.log(`"${userInput}" is not a palindrome.`);
	}
}
