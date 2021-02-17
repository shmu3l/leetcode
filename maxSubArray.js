const maxSubArray = (nums) => {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    result = Math.max(result, nums[i]);
  }
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([-2, 1]));
