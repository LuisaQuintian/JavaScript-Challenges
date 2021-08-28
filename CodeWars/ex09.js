function rgb(r, g, b) {
    let colors = [r, g, b]
    let res = []
    let hexadecimal = []

    for (let i = 0; i < colors.length; i++) {

        if (colors[i] > 255) {
            colors[i] = 255
            let first = colors[i] / 16
            let number = parseInt(first)
            res.push(number)
            res.push((first - number) * 16)
        } else if (colors[i] < 0) {
            colors[i] = 0
            let first = colors[i] / 16
            let number = parseInt(first)
            res.push(number)
            res.push((first - number) * 16)
        } else {
            let first = colors[i] / 16
            let number = parseInt(first)
            res.push(number)
            res.push((first - number) * 16)
        }
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i] > 9) {
            hexadecimal.push(String.fromCharCode(res[i]+55))
        } else {
            hexadecimal.push(res[i])
        }
    }
    return hexadecimal.join("")
}

console.log(rgb(220, 20, -60))

/* outras opções:
let rgb = (r, g, b) => [r,g,b].map( (item) => item>=255 ? 'FF' : item<=0 ? '00' : item.toString(16).toUpperCase()).join('')

outra:
function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  let color = (r << 16) + (g << 8) + b;

  return ('00000' + color.toString(16).toUpperCase()).slice(-6);
}

outra:
function rgb(r, g, b){
  const c = n => ('0' + Math.max(0, Math.min(255,n)).toString(16).toUpperCase()).slice(-2);
  return c(r)+c(g)+c(b);
}*/
