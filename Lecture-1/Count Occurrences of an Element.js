

let arr = [1, 2, 3, 4, 5, 4, 4, 5, 7];
let target = 4;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
        sum++;
    }
}

console.log(sum);