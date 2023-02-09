function teclaPressionada(){
    alert('Você está teclando')
}

function teclaApertada(){
    alert('Tecla soltada')
}

function Shift(event){
    if (event.shiftKey) {
        alert('Você apertou o "shift"')
        console.log(event)
    } else {
        console.log(event)
    }
}

function Alt(event){
    if (event.altKey){
        alert('Você pressionou o "alt"')
        console.log(event)
    } else {
        console.log(event)
    }
}


