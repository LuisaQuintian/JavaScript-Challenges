function persistence(num) {

    let newnum = num
    let times = 0
    
    while (newnum > 9) {
    let numToString = Array.from(String(newnum))
    var result = numToString.reduce( (a,b) => a * b );
    newnum = result
    times++
    }
    
    return times  
}
console.log(persistence(4))