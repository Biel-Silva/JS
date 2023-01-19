//Varriáveis
var a = 10
var b = 20
var c = null

document.write(`<p>${a}</p> <p>${b}</p> <p>${c}</p>`)
document.write(`<hr>`)
c = b
b = a
a = c
c = null

document.write(`<p>${a}</p> <p>${b}</p> <p>${c}</p>`)