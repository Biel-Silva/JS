//Concatenar é juntar valores de variáveis em textos estáticos
var nome = prompt("Olá, diga seu nome")
document.write(`<h1>Olá, ${nome} como vai você?</h1>`);

var idade = parseInt(prompt("Quantos anos você tem?"));

if (idade >= 40){
    document.write(`<h1>Hmmmmm, ${idade}? um pouco velho, mas a idade acompanha a sabedoria ;)</h1>`);
}

else {
    document.write(`<h1>Hmmmmmm, ${idade}? Muito novo ainda pow :)</h1>`);
}