let arr = [1, 3, 5, 3, 4, 2, 1, 5, 6, 7, 7];

const sumarray= (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

for (let i = 0; i < arr.length; i++) {
    let subarray = [];
    for (let j = i; j < arr.length; j++) {
        subarray.push(arr[j]);
    }
}


console.log(sumarray(arr));