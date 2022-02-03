
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// "Lorem  ipsum  dolor  sit amet,\nconsectetur  adipiscing  elit,\n"

// sed    do    eiusmod    tempor
// incididunt ut labore et dolore
// magna aliqua. Ut enim ad minim
// veniam,      quis      nostrud
// exercitation  ullamco  laboris
// ...

function justifyText(lineLength) {
	let result = "";

	let wordArr = text.split(" ");
	let wordLine = [];
	let wordsCount = wordArr.length;
	let wordsIndex = 0;
	console.log(wordsCount);
	while (wordsIndex < wordsCount - 1) {
		let currWord = wordArr[wordsIndex];
		const len = getLineLength(wordLine);

		// Count 1 extra for space before new word.
		if (lineLength - len < currWord.length + 1) {

			// Form the string using the wordLine and add to result.
			result = result + "\n" + convertWordLineToStr(wordLine, lineLength);

			// Reset the variables for new line.
			wordLine = [];
		} else {
			// Add the word to current line.
			wordLine.push(currWord);

			// Advance to next word.
			wordsIndex++;
		}
	}

	if (wordLine.length) {
		result = result + "\n" + convertWordLineToStr(wordLine, lineLength);
	}

	return result;
}

// Adjust the spaces evenly
function convertWordLineToStr(wordLine, lineLength) {
	let result = "";

	// How many extra spaces we have, distribute evenly between words with preference
	// for words starting from left.
	let extraSpacesCount = lineLength - getLineLength(wordLine);

	let extraPerWord = Math.floor(extraSpacesCount / (wordLine.length - 1));

	// In case even distribution is not possible, give extra spaces to word on left side.
	let moreExtraSpace = extraSpacesCount % (wordLine.length - 1);
	wordLine.forEach((word, index) => {
		let extraSpace = extraPerWord + (moreExtraSpace > 0 ? 1 : 0);
		moreExtraSpace--;

		// Do not include the space after last word.
		if (index < wordLine.length - 1) {
			result += word + " " + "*".repeat(extraSpace);
		} else {
			result += word;
		}
	});

	return result;
}

function getLineLength(wordLine) {
	let count = 0;
	wordLine.forEach((word, index) => {
		count += word.length;

		// Do not include the space after last word.
		if (index < wordLine.length - 1) {
			count += 1;
		}
	});
	return count;
}

console.log(justifyText(25))