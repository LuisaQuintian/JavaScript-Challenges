function myFunction(array) {
    const Reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (array.reduce(Reducer))/array.length
}
console.log(myFunction([-50,0,50,200]))

// other solution:
// function myFunction( input ) {
//     return input.reduce((acc, cur) => acc + cur, 0) / input.length
//     }