window.onload = function () {
    var dadosArquivados = JSON.parse(sessionStorage.getItem('projetoAtual'));

    var fotoProjeto = document.getElementById("img-projeto")
    fotoProjeto.src = dadosArquivados.url

    var fotoCliente = document.getElementById("img-cliente")
    fotoCliente.src = dadosArquivados.cliente.url

    var nome = document.getElementById("nomeConsultor")
    nome.innerHTML = dadosArquivados.consultor.nome

    var descCliente = document.getElementById("desc")
    descCliente.innerHTML = dadosArquivados.cliente.descricao


    var btnExcluir = document.getElementById("btnExcluir")

    btnExcluir.addEventListener('click', () => {
        this.alert('Ia excluir cara')
    })
}

