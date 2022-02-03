/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
	if (!s) {
		return "";
	}

	if (s.indexOf("@") > -1) {
		return maskEmail(s);
	}

	return maskPhoneNumber(s);
};

var maskEmail = function (s) {
	s = s.toLowerCase();

	let [name, domain] = s.split("@");

	name = name[0] + "*".repeat(5) + name[name.length - 1];

	return `${name}@${domain}`;
}

var maskPhoneNumber = function (s) {
	s = s.replace(/\D/g, "");
	let maskedNum = `***-***-${s.substring(s.length - 4)}`;
	if (s.length === 10) {
		return maskedNum;
	}

	return "+" + "*".repeat(s.length - 10) + "-" + maskedNum;
}