// https://leetcode.com/problems/validate-ip-address/
/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
	if (IP.length < 7) {
		return "Neither";
	}

	if (IP.indexOf(".") >= 0) {
		if (ValidateIPaddress(IP)) {
			return "IPv4";
		}
		return "Neither";
	}

	if (IP.indexOf(":") >= 0) {
		if (validIPv6(IP)) {
			return "IPv6";
		}
		return "Neither";
	}
};

var validIPv6 = function (ip) {
	let ipv6Regex = /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;


	return ipv6Regex.test(ip);
}

function ValidateIPaddress(ipaddress) {
	let ipv4Regex = /^((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))$/;
	return ipv4Regex.test(ipaddress);
}

/*

([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])
represents one octet 1 - 255
leading zeros are not allowed

curly braces are for repeating {3} meaning repeat 3 times
{1, 4} means repeat 1 to 4 times.

*/