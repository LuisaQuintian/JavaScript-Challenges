function myFunction(n1, n2) {
    return (Array.from({length:(n2 - n1)/1+1},(_, i) => n1 + (i*1)))
}
console.log(myFunction(2, 7))