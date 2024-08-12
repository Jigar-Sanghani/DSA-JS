let arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
let cursum = arr[0];
let maxsum = arr[0];

for (let i = 0; i < arr.length; i++) {
    cursum += arr[i];

    if (cursum > maxsum){
        maxsum = cursum;
    }

    if(cursum < 0){
        cursum = 0;
    }

    console.log(maxsum);
    
}