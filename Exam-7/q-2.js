


const arr_data = (arr, target, low = 0, high = arr.length - 1) => {

    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) {
        return mid;
    }

    else if (arr[mid] < target) {
        return arr_data(arr, target, mid + 1, high);
    }

    else {
        return arr_data(arr, target, low, mid - 1);
    }

}



let arr = [5, 6, 7, 8, 9, 10]

let target = 8;

let check = arr_data(arr, target)

console.log(check);
