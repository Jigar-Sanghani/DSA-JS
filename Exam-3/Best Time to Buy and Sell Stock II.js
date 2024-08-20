let arr = [7, 6, 4, 3, 1];

let max = 0;

const stockmenu = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] < arr[j] && arr[j] - arr[i] > max) {
                max = arr[j] - arr[i];
            }
        }
    }
    return max;
}

let check = stockmenu(arr);
console.log(check);