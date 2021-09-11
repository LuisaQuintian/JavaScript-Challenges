function myFunction(n) {
    for (let i = 2; i<n; i++) {
        if (n % i === 0) {
            i=2
            n++
        }
    }
    return n
}
console.log(myFunction(115))