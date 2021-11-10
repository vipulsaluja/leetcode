// https://leetcode.com/problems/design-underground-system/

var UndergroundSystem = function () {
	this.travelTimeMap = new Map();
	this.customerTravelTimeMap = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
	if (this.customerTravelTimeMap.has(id)) {
		return;
	}

	this.customerTravelTimeMap.set(id, { start: stationName, time: t });
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
	if (!this.customerTravelTimeMap.has(id)) {
		return;
	}

	let { start, time } = this.customerTravelTimeMap.get(id);
	let timeTaken = t - time;

	let mapKey = start + "-" + stationName;
	if (this.travelTimeMap.has(mapKey)) {
		this.travelTimeMap.get(mapKey).push(timeTaken);
	} else {
		this.travelTimeMap.set(mapKey, [timeTaken]);
	}

	this.customerTravelTimeMap.delete(id);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
	let mapKey = startStation + "-" + endStation;
	if (!this.travelTimeMap.has(mapKey)) {
		return 0;
	}

	let travelTimes = this.travelTimeMap.get(mapKey);
	return travelTimes.reduce((a, b) => a + b, 0) / travelTimes.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */