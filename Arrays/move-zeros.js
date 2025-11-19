
function moveZeros(arr){

    // [1,2,0,9,0,6]
    let j = arr.length - 1;
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] === 0){
            
            arr[i] = arr[j];
            arr[j] = 0;
            j--;
        }
        
    }
}

const arr = [1,2,0,9,0,6];
moveZeros(arr);
console.log(arr);