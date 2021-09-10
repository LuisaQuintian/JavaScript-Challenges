function myFunction(letter, string) {
    return string.toLowerCase().split(letter).length-1
}
console.log(myFunction('m', 'How many times does the character occur in this sentence?'))

// longer solution:
// const stringArray = Array.from(string.toLowerCase())
//     let TOTAL = 0
//     for (let i in stringArray) {
//         if (letter === stringArray[i]) {TOTAL++} 
//     }
//     return TOTAL
