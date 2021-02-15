// Given an array of positive numbers and a positive number ‘S’,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
// Return 0, if no such subarray exists.
// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

const findMinSubArray = (S, nums) => {
  let winStart = 0;
  let winSum = 0;
  let minLength = S + 1;
  for (let winEnd = 0; winEnd < nums.length; winEnd++) {
    winSum += nums[winEnd];
    while (winSum >= S) {
      let current = winEnd - winStart + 1;
      minLength = Math.min(minLength, current);
      winSum -= nums[winStart];
      winStart++;
    }
  }
  return minLength;
};

console.log(findMinSubArray(7, [2, 1, 5, 2, 8]));
