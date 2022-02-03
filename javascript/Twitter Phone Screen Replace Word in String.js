// The string
// 'The quick brown fox jumps over the lazy dog';

// The array of replacement objects
// [ { start: 16, word: 'fox', replacement: 'elephant' }]; 

// Result
// 'The quick brown elephant jumps over the lazy dog'
function stringReplacer(originalStr, replacements) {
	if (!replacements.length) {
		return originalStr;
	}

	if (!originalStr) {
		return originalStr;
	}

	replacements.sort((a, b) => { return b.start - a.start; });

	let replacedStr = "";
	for (let i = 0; i < replacements.length; i++) {
		let { start, word, replacement } = replacements[i];
		if (!(originalStr.length > start)) {
			return originalStr;
		}

		// Orignal string before the word.
		// replacedStr = originalStr.substring(0, start);

		// Replacement word.
		// replacedStr = replacedStr + replacement;

		// Rest of the string after the "word".
		// replacedStr = replacedStr + originalStr.substring(start+word.length, originalStr.length);

		// originalStr = replacedStr;


		replacedStr = originalStr.substring(start + word.length, originalStr.length - replacedStr.length) + replacedStr;
		replacedStr = replacement + replacedStr;
		if (i === replacements.length - 1) {
			replacedStr = originalStr.substring(0, start);
		}
	}

	return replacedStr;
}

let strInput = 'The quick brown fox jumps over the lazy dog';
let replacementsInput = [{ start: 16, word: 'fox', replacement: 'elephant' }];
// n m
// let multipleReplacements = [ { start: 16, word: 'fox', replacement: 'elephant' }, { start: 4, word: 'quick', replacement: 'fast' }, { start: 20, word: 'jumps', replacement: 'hops' }]; 
let multipleReplacements = [{ start: 20, word: 'jumps', replacement: 'hops' }, { start: 16, word: 'fox', replacement: 'elephant' }, { start: 4, word: 'quick', replacement: 'fast' }];
// 'The quick brown fox jumps over the lazy dog' // original
// 'The quick brown elephant jumps over the lazy dog';
// 'The fast brown elephant jumps over the lazy dog';
// 'The fast brown elephant hops over the lazy dog';
console.log(stringReplacer(strInput, multipleReplacements));