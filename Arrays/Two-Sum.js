// Problem:

// Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to the target.
// nums = [2, 7, 11, 15], target = 9 => output : [0,1]

function twoSumBruteForce(nums, target) {
  let fNumber = 0;
  let sNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSumHashMap(nums, target) {
  const seen = {}; // store number -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }

  return [];
}

const nums = [2, 77, 3, 6, 4, 7, 8];
console.log(twoSumBruteForce(nums, 9)); // time complexity o(n2)
console.log(twoSumHashMap(nums, 9)); // time complexity o(n)
