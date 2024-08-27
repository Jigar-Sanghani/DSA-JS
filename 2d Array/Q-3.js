let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let n = matrix.length;
let m = matrix[0].length;

const Spiral = (matrix) => {

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i == 0 || j == 0) {
                console.log(matrix[i][j]);
            }
        }

    }

}

let arr = Spiral(matrix);
console.log(arr);
