// https://leetcode.com/problems/finding-the-users-active-minutes/
/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */

/*
Hold the UAM for each user in a map.
When processing the log, adjust the count of users as per the UAM
in result.
*/
var findingUsersActiveMinutes = function (logs, k) {
	let usersMap = new Map();
	let activeUsers = Array(k).fill(0);
	logs.forEach(([id, time]) => {
		if (!usersMap.has(id)) {
			usersMap.set(id, new Set());
		}

		let currUAM = usersMap.get(id).size;
		// Make sure the current user is in the result set.
		if (currUAM > 0 && currUAM <= k) {
			activeUsers[currUAM - 1]--;
		}

		usersMap.get(id).add(time);
		let newUAM = usersMap.get(id).size;

		// Make sure the current user is in the result set.
		if (newUAM <= k) {
			activeUsers[usersMap.get(id).size - 1]++;
		}
	});

	return activeUsers;
};