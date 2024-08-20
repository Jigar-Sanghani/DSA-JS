

let arr1 = 'listen';
let arr2 = 'silent';


const arraymanage = (arr1, arr2) => {

    let str1 = arr1.split('');
    let str2 = arr2.split('');
    let check = true;

    console.log(str1.sort(), str2.sort());
    if (str1.length == str2.length) {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i]) {
                check = false;
                break;
            }
        }
    } else {
        check = false;
    }
    return check;
}

let check = arraymanage(arr1, arr2);

console.log(check);

