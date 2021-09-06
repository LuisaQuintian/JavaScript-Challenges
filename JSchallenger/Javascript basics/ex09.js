function myFunction(string) {
    const map = Array.prototype.map;
    const charCodeArray = map.call(string, function(x) { return x.charCodeAt(0)+1 })
    const res = []
    for (var i in charCodeArray) {res.push(String.fromCharCode(charCodeArray[i]))}
    return res.join('')
}

console.log(myFunction('sdrshmf'))

// other solution:
// function myFunction(str) {
//     const arr = [...str];
//     const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
//     return correctedArray.join('');
// }


