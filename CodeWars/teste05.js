function printerError(s) {

    let frase = Array.from(s)
    let letraserradas = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z']
    let erros = 0

    for (j = 0; j < frase.length; j++) {
        if (letraserradas.includes(frase[j])) {
            erros++
        }
    }

    return `error_printer(s) => '${erros}/${s.length}'`
}
let errors = printerError('aaabbbbhaijjjm')

console.log(errors)