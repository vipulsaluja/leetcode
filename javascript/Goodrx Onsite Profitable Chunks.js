/**
Your function should have the the following parameters:

	int stockPrices[]: the stock prices for n months

	int k: the analysis parameter

0  1  2  3  4 
5  3  5  7  8
l        r
 
 

Returns

	int: the number of highly profitable months
**/


function numOfProfitableChunks(stockPrices, k) {
	if (k < 2) {
		return -1;
	}

	if (!stockPrices || stockPrices.length < k) {
		return 0;
	}

	let result = 0;
	let stockLength = stockPrices.length;
	let left = 0;
	// let right = 0;

	// O(n)
	//   while(right < stockLength-1){
	//     if(stockPrices[right] < stockPrices[right+1]){
	//       right++;

	//       if((right-left+1) > k){
	//         left++;
	//       }
	//     } else {
	//       right++;
	//       left = right;
	//     }


	//     // Whenever the length of sliding windows is k
	//     // Increment the result.
	//     if((right-left+1) === k){
	//       result++;
	//     }
	//   }

	for (let right = 0; right <= stockPrices.length; right++) {
		if ((right - left + 1) > k) {
			left++;
		}

		// Whenever the length of sliding windows is k
		// Increment the result.
		if ((right - left + 1) === k) {
			result++;
		}


		if (right === stockPrices.length - 1) {
			break;
		}

		if (stockPrices[right] >= stockPrices[right + 1]) {
			left = right + 1;
		}
	}

	return result;
}

let pricesArr = [
	{ prices: [5, 3, 5, 7, 8], k: 2, expectedOutput: 3 },
	{ prices: [1, 3, 5, 7], k: 3, expectedOutput: 2 },
	{ prices: [5, 3, 5, 7], k: 3, expectedOutput: 1 },
	{ prices: [5, 7], k: 3, expectedOutput: 0 },
	{ prices: [1, 2, 3, 1, 1, 2, 4, 3], k: 3, expectedOutput: 2 },
	{ prices: [1, 2, 3, 1, 1, 2, 4, 3], k: 0, expectedOutput: -1 },
	{ prices: undefined, k: 3, expectedOutput: 0 },
	{ prices: [1, 2, 3, 4, 5, 6], k: 1, expectedOutput: -1 },
	{ prices: [1, 2, 3, 4, 5, 6], k: 7, expectedOutput: 0 },
];

function tests() {
	pricesArr.forEach((testData) => {
		let output = numOfProfitableChunks(testData.prices, testData.k);
		if (output === testData.expectedOutput) {
			console.log(true);
		} else {
			console.log(false, "got: ", output);
		}
	});
}


tests();
  // [1,2,3,1,1,2,4,3]