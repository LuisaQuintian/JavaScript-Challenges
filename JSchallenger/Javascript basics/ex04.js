function myFunction(n) {
    return Number.isInteger(n)
 }
console.log(myFunction(4.5))

// outra solução:
// function myFunction(input) {
//     return input - Math.floor(input) === 0
// }
 