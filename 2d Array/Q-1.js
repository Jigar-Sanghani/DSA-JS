let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let n = matrix.length;
let arr1 = [];


const rotate = (matrix) => {

    for (let i = 0; i < n; i++) {
        arr1[i] = [];
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr1[j][n - 1 - i] = matrix[i][j];
        }
    }

    return arr1;

}

let arr = rotate(matrix);
console.log(arr);

