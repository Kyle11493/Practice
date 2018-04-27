let rules = {
	A: "AB",
	B: "A"
}
let generate = (sentence) => {
	let nextSentence = "";
	for (let current of sentence) {
		nextSentence += rules.hasOwnProperty(current) ? rules[current] : current;
	}
	return nextSentence;
}


const testCases = [
	{ input: "AABA", expected: "ABABAAB" },
	{ input: "abab", expected: "abab" },
	{ input: "cAsB", expected: "cABsA" },
	{ input: "1", expected: "1" },
	{ input: "", expected: "" },
	{ input: "6^", expected: "6^" },
	{ input: "\n", expected: "\n" },
	{ input: " ", expected: " " },
	{ input: "4 * A", expected: "4 * AB" },
//	{ input: "Error test", expected: "An error should occur" }
]
let test = () => {
	let errors = [];
	for (let i = 0; i < testCases.length; i++) {
		if (generate(testCases[i].input) !== testCases[i].expected) {
			var exception = {
				input: testCases[i].input,
				expected: testCases[i].expected,
				got: generate(testCases[i].input)
			};
			errors.push(exception);
		}
	}
	if (errors.length === 0) {
		console.log("No errors detected.");
	} else {
		console.log("Something went wrong:");
		console.log(errors);
	}
}