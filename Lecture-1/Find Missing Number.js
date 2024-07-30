function findMissingNumber(arr) {
    const n = arr.length + 1;
    const numbers = new Set(Array.from({ length: n }, (_, i) => i + 1));

    arr.forEach(num => numbers.delete(num));

    return Array.from(numbers)[0]; 
}

let arr = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr));
