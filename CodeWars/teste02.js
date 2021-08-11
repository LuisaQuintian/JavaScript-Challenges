function alphabetPosition(text) {
    let letras = Array.from('abcdefghijklmnopqrstuvwxyz')
    let letrasfrase = Array.from(text.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase())
  
     for (let i = 0; i < letrasfrase.length; i++) {
            letrasfrase.splice(i, 1, letras.indexOf(letrasfrase[i])+1)

            if (letrasfrase[i] == 0) {
                letrasfrase.splice(i, 1)
            }
      }
  
    console.log(letrasfrase.join(" "))
  }
  alphabetPosition("The sunset sets at twelve o' clock.")
