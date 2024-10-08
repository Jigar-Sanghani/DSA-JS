


let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 3;


const maxSum = (arr, k) => {
    let maxSum = 0;
    let currSum = 0;

    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }

    maxSum = currSum;

    for (let i = k; i < arr.length; i++) {
        currSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};


let maximum = maxSum(arr, k);
console.log("Maximum : ",maximum);
