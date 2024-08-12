function findPairsWithTargetSum(n, weights, target) {
    weights.sort((a, b) => a - b);

    let left = 0;
    let right = n - 1;

    let pairs = [];

    while (left < right) {
        let currentSum = weights[left] + weights[right];

        if (currentSum === target) {
            pairs.push([weights[left], weights[right]]);
            left++;
            right--;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    pairs.forEach(pair => console.log(pair.join(' ')));
}

let n1 = 6;
let weights1 = [1, 2, 3, 4, 5, 6];
let target1 = 7;
findPairsWithTargetSum(n1, weights1, target1);

