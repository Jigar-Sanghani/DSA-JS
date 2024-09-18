

const palidrome = (str, i, j) => {

    if (i == j) {
        return true
    }

    if (str[i] != str[j]) {
        return false
    }

    return palidrome(str, ++i, --j);

}

let string = "racecar"

let i = 0

let j = string.length - 1

let check = palidrome(string, i, j)

console.log(check);