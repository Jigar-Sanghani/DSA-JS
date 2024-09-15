

const Sum_array = (array, i = 0, sum = 0) => {
    if (i === array.length) {
        return 0;
    }
    return array[i] + Sum_array(array, i + 1, sum);
};

let arr = [1, 2, 3, 4, 5]

let sum = Sum_array(arr)
console.log(sum);

