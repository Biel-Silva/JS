var data = new Date()

//Adicionar ou remover dias
document.write(data.toString() + '<hr>')

//Adicionando e removendo dias
data.setDate(data.getDate() - 28)
document.write(data.toString() + '<hr><br><br><hr>')

data.setDate(data.getDate() + 28)

//Adicionando e removendo meses
document.write(data.toString() + '<hr>')   //Apresentando data total

data.setMonth(data.getMonth() + 1) //Somando + 1 mês

document.write(data.toString() + '<hr><br><br><hr>') //Retornando com um mês a mais 

//Adicionando ou removendo anos
document.write(data.toString() + '<hr>') //Retornando o ano atual

data.setFullYear(data.getFullYear() + 1) //Adicionando um ano a mais

document.write(data.toString() + '<hr><br><br>')
