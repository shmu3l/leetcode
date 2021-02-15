// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
// Example 1:
// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// const search = (nums, targetSum) => {
//   let i;
//   let j = nums.length - 1;
//   let currentSum;
//   let result = [];
//   for (i = 0; i < nums.length; i++) {
//     currentSum = nums[i] + nums[j];
//     if (currentSum === targetSum) {
//       result = [i, j];
//     }
//     if (currentSum > targetSum) {
//       j--;
//     }
//   }
//   return result;
// };

// An Alternate approach #Hashtable
const search = (nums, targetSum) => {
  let htable = {};
  let result = [];
  let current;
  for (let i = 0; i < nums.length; i++) {
    if (htable[nums[i]]) {
      result.push(htable[nums[i]], i);
    } else {
      htable[targetSum - nums[i]] = i;
    }
  }
  return result;
};
console.log(search([1, 2, 3, 4, 6], 6)); //[1, 3]
