

const Check_Palindrome = (string, i = 0, j = string.length - 1) => {

    if (i == j) {
        return true
    };

    if (string.charAt(i).toLowerCase() !== string.charAt(j).toLowerCase()) {
        return false;
    }

    return Check_Palindrome(string, ++i, --j);

};

let string = "nayan"
let check = Check_Palindrome(string)

console.log(check);

