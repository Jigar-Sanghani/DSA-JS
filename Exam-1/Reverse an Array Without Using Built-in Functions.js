

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverse = (arr) => {

    let j = 0;
    let i = arr.length - 1;

    while (i > j) {
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
        i--;
        j++;
    }
    return arr;

}

let reverseArray = reverse(arr);

console.log(reverseArray);