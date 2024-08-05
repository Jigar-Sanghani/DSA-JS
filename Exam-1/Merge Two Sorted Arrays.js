let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [];


const mergefunction = (arr1, arr2) => {


    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]);
    }

    for (let j = 0; j < arr2.length; j++) {
        arr3.push(arr2[j]);
    }

    for (let k = 0; k < arr3.length - 1; k++) {
        if (arr3[k] > arr3[k + 1]) {
            let temp = arr3[k];
            arr3[k] = arr3[k + 1];
            arr3[k + 1] = temp;
            k = -1;
        }
    }

    return arr3;

}

mergefunction(arr1, arr2);
console.log(arr3);

