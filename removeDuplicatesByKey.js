// Problem 1: Given an unsorted array of numbers and a target ‘key’,
// remove all instances of ‘key’ in-place and return the new length of the array.

// Example 1:
// Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
// Output: 4
// Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].

const removeDuplicatesByKey = (nums, key) => {
  let next_pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== key) {
      nums[next_pointer] = nums[i];
      next_pointer++;
    }
  }
  return next_pointer;
};

console.log(removeDuplicatesByKey([3, 2, 3, 6, 3, 10, 9, 3], 3));
