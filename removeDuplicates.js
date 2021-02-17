// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space; after removing the duplicates in-place return the new length of the array.

// Example 1:
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
//  n  i
// [2, 3, 3, 3, 6, 9, 9]

const removeDuplicates = (nums) => {
  let next_pointer = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[next_pointer - 1]) {
      nums[next_pointer] = nums[i];
      next_pointer++;
    }
  }
  return next_pointer;
};

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
