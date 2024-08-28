let arr = [3, 5, 2, 6, 2, 4]
let k = 2;

const min = (arr, k) => {
    let minsum = 0;
    let currSum = 0;

    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }

    minsum = currSum;

    for (let i = k; i < arr.length; i++) {
        currSum += arr[i] - arr[i - k];
        minsum = Math.min(minsum, currSum);
    }

    return minsum;
}

let sub = min(arr, k);
console.log(sub);
