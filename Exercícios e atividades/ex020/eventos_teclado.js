//Ao apertar num determinado elemento
function aoApertar(){
    alert('Você clicou na tecla')
}

//Ao soltar a tecla num determinado elemento
function aoSoltar(){
    alert('Você soltou a tecla')
}

//Ao apertar no documento TODO
document.addEventListener('keydown', function(event){

    if (event.key == 'Enter'){
        alert('Você apertou o "Enter"')
        console.log(event.key)
    }
})

//Ao soltar no documento TODO
document.addEventListener('keyup', function(event){
    console.log(event.key)
})

let x = {
    nome : 'Gabriel',
    idade : 15,
    altura : 1.63,
}

console.log(x)
