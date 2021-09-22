function myFunction(array, num) {
    let newArray = []
    for (var i in array){
       if (array[i] > num) {
           newArray.push(array[i])
       }
    }
    const Reducer = (accumulator, currentValue) => accumulator + currentValue;
    return newArray.reduce(Reducer)
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2))
