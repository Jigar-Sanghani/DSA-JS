

let arr = [1, 2, 3, 4, 5];
let Smallest = arr[0]; 

for (let i = 0; i < arr.length; i++) {
    if (Smallest > arr[i]) {
        Smallest = arr[i];
    }
}

console.log(Smallest);