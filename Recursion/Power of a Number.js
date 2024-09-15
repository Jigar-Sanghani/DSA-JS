
//  Power of a Number
const Power_Number = (n, power) => {
    if (power === 0) {
        return 1
    };
    return n * Power_Number(n, power - 1);
};

let n1 = 5;
let power = 0

let number = Power_Number(n1,power);

console.log(number);
