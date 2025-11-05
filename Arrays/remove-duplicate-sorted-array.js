function removeDuplicateFromSortedArray(arr) {
  if (arr.length === 0) return arr;

  let i = 0; 

  // [1, 1, 2, 2, 3, 3, 4] 
  for (let j = 1; j < arr.length; j++) {
    
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j]; // replace new value arr[j]
    }
  }

  return arr.slice(0, i + 1); // return new array from 0 index to index of i (remove duplicate values)
}


// const arr = [1,1,2];
const arr = [1, 1, 2, 2, 3, 3, 4];

const newArray = removeDuplicateFromSortedArray(arr);
console.log(newArray);
