function capitalizeFirstLetter(paragraph) {
    let words = paragraph.split(/\s+/);
    let capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    });

    let result = capitalizedWords.join(' ');

    return result;
}

let inputParagraph1 = "the quick Brown fox jumps over The lazy dog.";
console.log(capitalizeFirstLetter(inputParagraph1));
