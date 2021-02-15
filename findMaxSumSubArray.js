// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

const findMaxSumSubArray = (nums, k) => {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }
  return maxSum;
};

console.log(findMaxSumSubArray([2, 1, 5, 1, 3, 2], 3));
