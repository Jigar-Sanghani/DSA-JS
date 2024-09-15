

const naturalSum = (n) => {
    if (n === 0) {
        return 0
    };

    return n + naturalSum(n - 1);
};

let n = 5;

let number = naturalSum(n);

console.log(number);