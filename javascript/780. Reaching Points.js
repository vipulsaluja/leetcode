// https://leetcode.com/problems/reaching-points/
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
	return approachTarget(sx, sy, tx, ty);
};


var approachTarget = function (sx, sy, tx, ty) {
	// Source points are larger than target, not possible.
	if (sx > tx || sy > ty) {
		return false;
	}

	// Source points are equal to target, work done!
	if (sx === tx && sy === ty) {
		return true;
	}

	// If either is greater than only operation can be done to
	// subtract the other one, modulus is quicker way to bypass 
	// multiple iterations.
	if (tx > ty) {
		tx = tx % ty;
	} else {
		ty = ty % tx;
	}

	// If one number is already matched, second number must match (multiple), otherwise
	// it cannot match ever.
	if (sx === tx) {
		return (ty - sy) % sx === 0;
	} else if (sy === ty) {
		return (tx - sx) % sy === 0;
	} else {
		// If none is equal, try again.
		return approachTarget(sx, sy, tx, ty);
	}
}