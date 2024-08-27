let matrix = [
    [1, 3, 5],
    [7, 9, 11],
    [13, 15, 17]
]

let target = 9;
let n = matrix.length;

const search = (matrix, target) => {
    for (let i = 0; i < n; i++) {
        if (matrix[i][i] === target) {
            return true;
        }
    }
    return false;
}

let Search = search(matrix, target);
console.log(Search);
