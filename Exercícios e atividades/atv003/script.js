//Recebendo valores
var nome = prompt("Digite seu nome")
var altura = Number(prompt("Digite sua altura em centímetros")) / 100
var peso = Number(prompt("Digite o seu peso"))

//Fazendo o cálculo de IMC
var IMC = peso / altura**2
var classificação = null

//Verificando a situação do usuário
if (IMC < 16){
    classificação = "baixo, peso muito grave"
} else if (IMC >= 16 && IMC <= 16.99){
    classificação = "baixo, peso grave"
} else if (IMC >= 17 && IMC <= 18.49){
    classificação = "baixo peso"
} else if (IMC >= 18.50 && IMC <= 24.99){
    classificação = "peso normal"
} else if (IMC >= 25 && IMC <= 29.99){
    classificação = "sobrepeso"
} else if (IMC >= 30 && IMC <= 34.99){
    classificação = "obesidade grau I"
} else if (IMC >= 35 && IMC <= 39.99){
    classificação = "obesidade grau II"
} else {
    classificação = "obesidade grau III"
}

//Saída
document.write(`<h2>${nome} possui índice de massa corpórea igual a ${IMC}, sendo classificado como ${classificação}</h2>`)