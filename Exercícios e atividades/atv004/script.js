var num1 = Number(prompt('Digite um número'))
var num2 = Number(prompt('Digite outro número'))
var calc = prompt('Digite se quer somar ou subtrair')

function calculo(num1, num2, operação){
    var resultado = null
    if (operação == 'somar'){
       resultado = num1 + num2

    } else if ('subtrair') {
       resultado = num1 - num2

    }

    return document.write('O resultado de ' + calc + ' esses números é: ' + resultado)
}

calculo(num1, num2, calc)