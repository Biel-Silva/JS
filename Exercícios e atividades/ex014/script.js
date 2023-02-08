

function exibirArtigo(id, callbackSucesso, callbackErro){
    var id = prompt('Digite o id do artigo')
    var NomeArtigo = prompt('Digite o titulo do artigo')
    var Descrição = prompt('Digite agora uma breve descrição')

    if ( true ){
        callbackSucesso(NomeArtigo, Descrição)
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
