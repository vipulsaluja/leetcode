// https://leetcode.com/problems/tweet-counts-per-frequency/


var TweetCounts = function () {
	// Tweet map can be used to store the tweets and their occurences.
	this.tweetMap = new Map();

	// Only minute, hour and day frequency in seconds are supported.
	this.freq = {
		minute: 60,
		hour: 60 * 60,
		day: 60 * 60 * 24
	}
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
	if (!this.tweetMap.has(tweetName)) {
		this.tweetMap.set(tweetName, []);
	}

	this.tweetMap.get(tweetName).push(time);
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (freq, tweetName, startTime, endTime) {
	// Invalid frequency.
	if (!this.freq[freq]) {
		return [];
	}

	// Tweet not found.
	if (!this.tweetMap.has(tweetName)) {
		return [];
	}

	// Number of chunks can be calculated using start and end time.
	let freqChunksCount = Math.floor((endTime - startTime) / this.freq[freq]) + 1;

	// Initialize the chunk array with 0s.
	let freqChunks = Array(freqChunksCount).fill(0);

	let tweetOccurences = this.tweetMap.get(tweetName);
	for (let i = 0; i < tweetOccurences.length; i++) {
		// Use the tweet occurence which is in the start and end time range.
		if (tweetOccurences[i] >= startTime && tweetOccurences[i] <= endTime) {
			// Chunk index can be calculated using the occurence and start time.
			let chunkIndex = Math.floor((tweetOccurences[i] - startTime) / this.freq[freq]);

			// Increase the count for the chunk.
			freqChunks[chunkIndex]++;
		}
	}

	return freqChunks;
};

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */