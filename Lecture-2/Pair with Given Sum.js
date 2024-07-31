    const pairsum = (arr, target) => {

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    return [arr[i], arr[j]];
                }
            }
        }
        return [-1, -1];
    }

    let arr = [12, 13, 14, 15, 16, 17, 18]
    let target = 30;

    console.log(pairsum(arr, target));