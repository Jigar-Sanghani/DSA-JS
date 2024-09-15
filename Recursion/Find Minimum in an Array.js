

const find_min = (array, i = 0, min = Infinity) => {
    if (i === array.length && min === Infinity) {
        return false;
    }
    if (i === array.length) {
        return min;
    }
    if (array[i] < min) {
        min = array[i];
    }

    return find_min(array, i + 1, min);
};

let arr = [10, 20, 5, 8, 3]

let check = find_min(arr)

console.log(check);
