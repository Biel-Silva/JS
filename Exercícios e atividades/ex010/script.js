//Funções

var a = Number(prompt("Digite o valor a da equação"))
var b = Number(prompt("Digite o valor b da equação"))
var c = Number(prompt("Digite o valor c da equação"))

var delta = b**2 - 4*(a*c)


function bhaskara(a, b, c){
    var x1 = (-b + Math.sqrt(delta))/2*a
    var x2 = (-b - Math.sqrt(delta))/2*a

    var raizes = document.write(`<h2>As raízes da equação da expressão digitada é ${x1} e ${x2}</h2>`)

    return raizes
}

bhaskara(a, b, c)

//Função área 
/*
var largura = Number(prompt("Digite a largura da figura"))
var comprimento = Number(prompt("Digite agora, o comprimento da figura"))

function CalcularAreaTerreno(largura, comprimento){
    var area = largura * comprimento

    document.write(`<h2>A área da figura é: ${area} m²</h2>`)
}

CalcularAreaTerreno(largura, comprimento)
*/
