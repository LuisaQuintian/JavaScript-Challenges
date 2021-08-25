function duplicateEncode(word){
    let letters = Array.from(word.toLowerCase())
    let qtd = 0
    let sortedLetters = Array.from(letters)

    for (let i = 0; i < sortedLetters.length; i++) {
        let qtd = letters.filter(x => x === letters[i]).length;
        console.log(qtd)

        if (qtd >= 2) {
            sortedLetters[i] = ")"
        } else {
            sortedLetters[i] = "("
        }
    }
    
    return sortedLetters.join("")
}
console.log(duplicateEncode("recede"))

//Outra opção que ainda não entendo:
// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
//   }