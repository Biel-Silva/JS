
function exibirArtigo(id, callbackSucesso, callbackErro){
    if ( true ){
        callbackSucesso('Funções do primeiro grau', 'Funções do 1 grau são funções matemáticas')
    } else {
        callbackErro('Erro ao recuperar dados')
    }
}

var callbackSucesso = function(nomeArtigo, descriçaoArtigo){
    document.write('<h1>'+nomeArtigo+'</h1> <hr>' + '<p>' + descriçaoArtigo + '</p>')
}

var callbackErro = function(erro){
    document.write('<p>'+erro+'</p>')
}

exibirArtigo(001, callbackSucesso, callbackErro)

callbackSucesso('Funções de segundo grau', 'São funções mais complexas')