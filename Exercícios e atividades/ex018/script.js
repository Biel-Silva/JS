var data = new Date()

//Adicionar ou remover dias

document.write('<p>DIA:</p><hr>' + data.toString() + '<hr>')
data.setDate(data.getDate() + 1)
document.write(data.toString() + '<hr><br><br>')

//Adicionando e removendo meses
document.write('<p>MÊS:</p><hr>' + data.toString() + '<hr>')   //Apresentando data total
data.setMonth(data.getMonth() + 1) //Somando + 1 mês
document.write(data.toString() + '<hr><br><br>') //Retornando com um mês a mais 

//Adicionando ou removendo anos
document.write('<p>ANO:</p><hr>' + data.toString() + '<hr>') //Retornando o ano atual
data.setFullYear(data.getFullYear() + 1) //Adicionando um ano a mais
document.write(data.toString() + '<hr><br><br>')


//Calculando diferença de dias entre datas
const MiliParaDia = 1000*Math.pow(60, 2)*24  //Fórmula de conversão de milissegundos para dia

var data2 = new Date(2022, 0, 15) //setando uma data qualquer
var data3 = new Date(2022, 1, 23) //setando outra data qualquer

document.write(Math.abs(data2.getTime()) + '<hr>') //Obtendo a quantidade de milissegundos até tal data
document.write(Math.abs(data3.getTime()) + '<hr>') //Obtendo a quantidade de milissegundos até tal data

document.write((data3.getTime() - data2.getTime()) / MiliParaDia) //Calculando a quantidade de milissegundos entre as datas e depois convertendo para dias
