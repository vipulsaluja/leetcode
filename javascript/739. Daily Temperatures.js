// https://leetcode.com/problems/daily-temperatures/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	let warmerDayStack = [];
	let nextWarmerDay = new Array(temperatures.length);
	nextWarmerDay[temperatures.length - 1] = 0;
	warmerDayStack.push({ temp: temperatures[temperatures.length - 1], index: temperatures.length - 1 });
	for (let i = temperatures.length - 2; i >= 0; i--) {
		while (warmerDayStack.length && temperatures[i] >= warmerDayStack[warmerDayStack.length - 1].temp) {
			warmerDayStack.pop();
		}

		if (warmerDayStack.length) {
			nextWarmerDay[i] = warmerDayStack[warmerDayStack.length - 1].index - i;
		} else {
			nextWarmerDay[i] = 0;
		}

		warmerDayStack.push({ temp: temperatures[i], index: i });
	}

	return nextWarmerDay;
};