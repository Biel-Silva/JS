
var aluno = prompt("Qual é o nome do aluno?")
var nota = Number(prompt(`Qual foi a nota do aluno ${aluno}`))

var media = 6

if (nota === media){
   document.write(`<h2>O aluno ${aluno}, de nota ${nota} está aprovado</h2>`)
} else {
   document.write(`<h2>O aluno ${aluno}, de nota ${nota} está reprovado</h2>`)
}