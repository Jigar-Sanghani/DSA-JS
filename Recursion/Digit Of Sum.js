

const Sum_Digits = (n) => {
    if (n === 0) {
        return 0
    };

    return (n % 10) + Sum_Digits(Math.floor(n / 10));
};

let n = 503;

let number = Sum_Digits(n);

console.log(number);