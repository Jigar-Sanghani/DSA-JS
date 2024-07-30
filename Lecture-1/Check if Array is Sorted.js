let arr = [10, 5, 1, 34, 5];

function sorted (arr)
{
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; 
        }
    }
    return true; 
}

console.log(sorted(arr));