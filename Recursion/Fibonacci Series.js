

const Fibonacci = (n) => {
    if (n < 2) {
        return n
    };
    return Fibonacci(n - 1) + Fibonacci(n - 2);
};

let n = 5;

let number = Fibonacci(n);

console.log(number);