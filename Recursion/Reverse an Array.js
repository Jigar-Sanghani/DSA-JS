
// Reverse Array

const reverse_Array = (array, i = 0) => {
    if (i === array.length) return;

    reverse_Array(array, i + 1);

    console.log(array[i]);
};


let arr = [1, 2, 3, 4, 5]

let sum = reverse_Array(arr)


