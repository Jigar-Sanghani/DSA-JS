


let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
let k = 3;


const minsum = (arr, k) => {
    let minisum = 0;
    let currSum = 0;

    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }

    minisum = currSum;

    for (let i = k; i < arr.length; i++) {
        currSum += arr[i] - arr[i - k];
        minisum = Math.min(minisum, currSum);
    }

    return minisum;
};


let minimum = minsum(arr, k);
console.log("Minimum : ", minimum);
