let num = [4, 5, 6, 7, 8, 6, 4, 5];


const dub = (num) => {
    let n = num.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (num[i] == num[j]) {
                return Math.min(num[i])
            }
        }
    }
}


let arr = dub(num);
console.log("Minimum Dublicate : ", arr);
