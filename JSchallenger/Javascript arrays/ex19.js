function myFunction(array) {
    let check = (list) => list.every(item => item === list[0])
    return check(array)
}
console.log(myFunction(['10',10,10,10]))