

const reverse_string = (string) => {

    if (string === '') {
        return string
    }

    return reverse_string(string.slice(1)) + string[0]

}

let string = 'recursion'

let reverse = reverse_string(string)

console.log(reverse);