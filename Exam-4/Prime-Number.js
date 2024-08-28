let count = 0;

const prime = (n) => {

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count <= 2) {
            console.log(i);

        }
        count = 0;
    }

}

let n = 20;

let arr = prime(n)