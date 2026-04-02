// Find the contiguous subarray with the largest sum.
// input nums = [-2,1,-3,4,-1,2,1,-5,4]
// output: 6

function maximunSubarray(arr){
let currentSum = arr[0];
let globalMax = arr[0];
for (let index = 1; index < arr.length; index++) {
    
    currentSum = Math.max(arr[index],currentSum + arr[index]);
    globalMax = Math.max(currentSum,globalMax);
    
}

return globalMax;

}

console.log(maximunSubarray([-2,1,-3,4,-1,2,1,-5,4]));