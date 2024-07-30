

let arr = [1, 2, 3, 4, 5];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (largest <= arr[i]) {
        largest = arr[i];
    }
}

console.log(largest);