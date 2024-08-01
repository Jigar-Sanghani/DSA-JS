//rotation

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const handle = (arr) => {

    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        console.log(arr[i], arr[j]);
        i++;
        j--;
    }
}

console.log(arr1);
handle(arr1)

//Reverse

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverse = (arr) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
        i++;
        j--;
    }
    return arr;
}

console.log(arr2);
console.log(reverse(arr2));

//palindrome

let str = "nayan"

const palindrome = (str) => {

    let element = '';

    for (let i = str.length-1; i >= 0 ; i--) {
         element += str[i];
    }
    
    return element

}


let rev = palindrome(str);
console.log("State : ",str);
console.log("Reverse : ",rev);

if(str == rev){
    console.log("This Is Palindrome ||");
}

else{
    console.log("This Is Not Palindrome ||");
}
