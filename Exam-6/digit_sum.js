

const sum_digits = (n) => {

    if (n === 0) {
        return 0
    };

    let last_digit = n % 10
    let sum_of_digit = Math.floor(n / 10)

    return (last_digit) + sum_digits(sum_of_digit)

}

let number = 1234;

let num = sum_digits(number)

console.log(num);