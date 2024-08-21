


let arr = [2, 5, 3, 1, 8, 9, 2];
let k = 2;


const maxproduct = (arr, k) => {
    let maxproduct = 1;
    let currproduct = 1;

    for (let i = 0; i < k; i++) {
        currproduct *= arr[i];
    }

    maxproduct = currproduct;

    for (let i = k; i < arr.length; i++) {
        currproduct /= arr[i - k];
        currproduct *= arr[i];
        maxproduct = Math.max(maxproduct, currproduct);
    }

    return maxproduct;
};


let maximum = maxproduct(arr, k);
console.log("Maximum : ", maximum);
