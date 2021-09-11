// https://leetcode.com/problems/angle-between-hands-of-a-clock/
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    let hourAngle = getHourAngle(hour, minutes);
    let minuteAngle = getMinuteAngle(minutes);

    return Math.min(Math.abs(hourAngle - minuteAngle), 360 - Math.abs(hourAngle - minuteAngle));
};

var getMinuteAngle = function (minutes) {
    return 6 * (minutes % 60);
}

var getHourAngle = function (hour, minutes) {
    return (hour % 12) * 30 + ((minutes % 60) / 60) * 30;
}