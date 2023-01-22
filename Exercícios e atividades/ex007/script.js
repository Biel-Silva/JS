//Operadores lógicos

//Ou(||)
/*
var a = 5
var b = 4

if (a == 5 || b != 4){
    document.write("Olá mundo")
}
*/

//E(&&) e Negação(!)
/*
var a = "Locus"
var b = 16

if (!(a == "Locus" && b != 5)){
    document.write("Nunca diga nunca")
} else {
    document.write("Falso")
}
*/

//Novo teste de aprovação
/*
var media = 6
var limite_faltas = 250

var aluno = prompt("Qual é o nome do aluno")
var nota = Number(prompt(`Qual foi a nota do aluno ${aluno}`))
var faltas = Number(prompt(`Quantas faltas o aluno ${aluno} teve`))

if (nota >= media && faltas < limite_faltas){
    document.write(`<h2 style="color:#00ff00">O aluno ${aluno} está aprovado por nota e faltas</h2>"`)
} else if (nota >= media && faltas >= limite_faltas) {
    document.write(`<h2 style="color:#ff0000">O aluno ${aluno} está reprovado por falta</h2>"`)
} else { 
    document.write(`<h2 style="color:#ff0000">O aluno ${aluno} está reprovado por nota</h2>`)
}
*/

//Operador ternário

var media = 6
var limite_faltas = 250

var aluno = prompt("Qual é o nome do aluno")
var nota = Number(prompt(`Qual foi a nota do aluno ${aluno}`))
var faltas = Number(prompt(`Quantas faltas o aluno ${aluno} teve`))

var resultado = (nota >= media && faltas <= limite_faltas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)
