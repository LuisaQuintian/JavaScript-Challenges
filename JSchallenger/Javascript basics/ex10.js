function myFunction(s1, s2) {
    const word = s1.replace(/[^a-z]/g,"")+s2.split('').reverse().join('').replace(/[^a-z]/g,"")
    return word.charAt(0).toUpperCase()+word.slice(1)
}
console.log(myFunction('java', 'tpi%rcs'))