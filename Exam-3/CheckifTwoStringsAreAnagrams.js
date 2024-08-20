

let arr1 = 'listen';
let arr2 = 'silent';

let str1 = arr1.split('');
let str2 = arr2.split('');

// console.log(str1);
// console.log(str2);


const arraymanage = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[i]) {
                return true;
                break;
            }
            else {
                return false;
                break;
            }
        }
    }
}

let check = arraymanage(str1, str2);

console.log(check);

