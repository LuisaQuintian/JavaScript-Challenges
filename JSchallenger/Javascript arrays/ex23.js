function myFunction(n1, n2) {
    const newArray = [n1]
    while (n1 < n2) {
        n1 ++
        newArray.push(n1)
    }
    return newArray
}

console.log(myFunction(-5, 5))