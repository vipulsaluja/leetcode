// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let bracketStack = [];
	s = s.split("");
	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case "(":
			case "{":
			case "[":
				bracketStack.push(s[i]);
				break;
			case ")":
				if (bracketStack.pop() !== "(") {
					return false;
				}
				break;
			case "}":
				if (bracketStack.pop() !== "{") {
					return false;
				}
				break;
			case "]":
				if (bracketStack.pop() !== "[") {
					return false;
				}
		}
	}

	return bracketStack.length === 0;
};