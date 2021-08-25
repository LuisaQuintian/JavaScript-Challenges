function getSum(a, b) {
    
    let valores = []

    if (a == b) {

        return a

    } 
    
    if (a < b) {

        while (a<=b) {
            valores.push(a)
            a++
        }

    } else {
        while (a>=b) {
            valores.push(a)
            a--
        }
    }

    let resultado = valores.reduce((total, currentElement) => total + currentElement)
    return resultado
}

console.log(getSum(-1,-1))
