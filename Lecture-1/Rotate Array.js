

let arr = [1, 2, 3, 4, 5];
let rotate = 2;

function rotateRightInPlace(arr, rotate) {
    const n = arr.length;
    rotate = rotate % n;
    for (let i = 0; i < rotate; i++) {
        arr.unshift(arr.pop()); 
    }
    return arr;
}


const rotatedArray = rotateRightInPlace(arr, rotate);
console.log("Rotated array to the right (in-place):", rotatedArray);