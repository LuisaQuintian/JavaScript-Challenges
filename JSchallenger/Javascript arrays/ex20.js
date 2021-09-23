function myFunction(array, n) {
    while (array.indexOf(n) !== -1) {
        array.splice(array.indexOf(n), 1)  
    }
    return array
}
console.log(myFunction([1,2,'2'], '2'))

// other solution:
// function myFunction( arr, value ) {
//     return arr.filter(cur => cur !== value)
// }