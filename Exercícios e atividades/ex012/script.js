//Escopo de variáveis

//Há 3 escopos: global, função e bloco

//global
var x = 11 //Essa variável pode ser acessada de todo o script

console.log(x) 

//bloco
if (true){
    let a = 1
    console.log(a)
    console.log(x)
}
 var a = {
    bloc: "afff",
    id: 1,
 }

//function
function função(){
    var b = 2
    console.log(b)
}

