


const arr_data = (arr, low = 0, high = arr.length - 1) => {


    let mid = Math.floor((low + high) / 2);

    return mid;
}



let arr = [5, 6, 7, 8, 9, 10, 11, 12, 13]

let check = arr_data(arr)

console.log(check);
