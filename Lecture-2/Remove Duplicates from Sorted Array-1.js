const removeDuplicates = (arr) => {
    if (arr.length === 0) {
        return 0; 
    }

    let uniqueIndex = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }
    return uniqueIndex + 1;
}

let input = [1, 1, 2];

console.log(removeDuplicates(input)); 
console.log(input.slice(0, removeDuplicates(input))); 
