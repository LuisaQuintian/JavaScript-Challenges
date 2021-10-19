function myFunction(array) {
    let res = ''
    let size = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > size) {
            size = array[i].length
            res = array[i]
        }
    }
    return res
}
console.log(myFunction(['I', 'need', 'candy']))

// other option:
// function otherFunction(array){
//     return array.reduce((a, b) => a.length > b.length ? a : b, '')
// }
// console.log(otherFunction(['I', 'need', 'candy']))