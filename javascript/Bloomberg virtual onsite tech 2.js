/**
 * 
 * 3[a] = aaa
10[bbb]2[b] = aaabb
3[2[a]b] = aabaabaab (reasoning - first we extend 2[a]b -> aab then we extend externally)
2[b]cd = bbcd
 */


/*
3[2[a]b]

3[(aa) b]

num = [3, 2]
str = ""

*/

function expandString(input) {
	let multiplierSt = [];
	let parsedStr = [];
	let subStr = "";
	let expandedStr = "";

	let length = input.length;
	let index = 0;
	while (index < length) {
		// index 0 => 3
		let currChar = input.charAt(index);
		// true
		if (isNumeric(currChar)) {
			// true
			let num = "";
			while (index < length && isNumeric(input.charAt(index))) {
				// "2"
				num += input.charAt(index);

				// index 2
				index++;
			}

			// [3, 2], index 1
			multiplierSt.push(parseInt(num));

			// index 1
			index--;
		} else {
			if (input.charAt(index) === "[") {
				parsedStr.push(subStr);
			} else if (input.charAt(index) === "]") {
				let multiplier = multiplierSt.pop();
				subStr = parsedStr.push(parsedStr.pop() + subStr.repeat(multiplier));
			} else {
				subStr += input.charAt(index);
			}
		}

		// index 2
		index++;
	}

	return expandString;
}


function isNumeric(char) {
	// Check if the provided char is numeric
	// If it is, return true.
	return true;
}