// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

// Example 1:
// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

// Example 2:
// Input: [-3, -1, 0, 1, 2]
// Output: [0 1 1 4 9]

const makeSquares = (arr) => {
  console.log(arr);
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let leftSq = arr[left] * arr[left];
    let rightSq = arr[right] * arr[right];
    if (leftSq > rightSq) {
      result.unshift(leftSq);
      left++;
    } else {
      result.unshift(rightSq);
      right--;
    }
  }
  console.log(result);
  return result;
};

// makeSquares([-2, -1, 0, 2, 3]); //[0, 1, 4, 4, 9]
makeSquares([-3, -1, 0, 1, 2]); //[0, 1, 1, 4, 9]
