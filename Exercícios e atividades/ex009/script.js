//Soma
var numero1 = Number(prompt("Diga um número"))
var numero2 = Number(prompt("Diga outro número"))

document.write(`<h2>A soma entre ${numero1} e ${numero2} é: ${numero1 + numero2}</h2><br>`)

//subtração
document.write(`<h2>A subtração entre ${numero1} e ${numero2} é: ${numero1 - numero2}</h2><br>`)

//Multiplicação
document.write(`<h2>A multiplicação entre ${numero1} e ${numero2} é: ${numero1 * numero2}</h2><br>`)

//Divisão
document.write(`<h2>A divisão entre ${numero1} e ${numero2} é: ${numero1 / numero2}</h2><br>`)

//Resto da divisão
document.write(`<h2>O resto da divisão entre ${numero1} e ${numero2} é: ${numero1 % numero2}</h2><br>`)

//Incremento
document.write(`<h2>Incrementando ${numero1} obtemos: ${++numero1}</h2><br>`)
numero1--

//Decremento
document.write(`<h2>Decrementando ${numero1} obtemos: ${--numero1}</h2>`)

numero1 = 4

document.write(numero1)
