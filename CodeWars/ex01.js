function arrayDiff(a, b) {

    for (j = 0; j < a.length; j++) {
        for (i = 0; i < b.length; i++) {

            if (a.includes(b[i])) {
            a.splice(a.indexOf(b[i]), 1) 
            }
        }   
    }

  console.log(a)
}
