function myFunction(a, b){
    return a.includes(b)?b+a:a+b
}
console.log(myFunction(" think, therefore I am","I"))

// outra solução:
// function myFunction(a, b) {
//     return a.indexOf(b) === -1 ? a + b : b + a
// }