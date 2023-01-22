
var idade = Number(prompt("Qual é a sua idade?"))

if (idade >= 0 && idade < 15){
    document.write(`<h2>Tens ${idade}, logo és criança</h2>`)
} else if (idade >= 15 && idade < 30){
    document.write(`<h2>Tens ${idade}, logo és jovem</h2>`)
} else if (idade >= 30 && idade < 60){
    document.write(`<h2>Tens ${idade}, logo és um adulto`)
} else if (idade >= 60 && idade < 80){
    document.write(`<h2>Tens ${idade}, logo és um idoso`)
} else {
    document.write(`<h2>Tens ${idade}, logo és caquético`)
}