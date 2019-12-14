window.onload = function () {
    var dadosArquivados = JSON.parse(sessionStorage.getItem('projetoAtual'));

    this.console.log("OBJ")
    this.console.dir(dadosArquivados)

    var fotoProjeto = document.getElementById("img-projeto")
    fotoProjeto.src = dadosArquivados.url

    var fotoCliente = document.getElementById("img-cliente")
    fotoCliente.src = dadosArquivados.cliente.url

    var nome = document.getElementById("nomeConsultor")
    nome.innerHTML = dadosArquivados.consultor.nome

    var desc_consultor = document.getElementById("desc_cliente")
    desc_consultor.innerHTML = dadosArquivados.consultor.cargo

    var descCliente = document.getElementById("desc")
    descCliente.innerHTML = dadosArquivados.cliente.descricao

    var btnExcluir = document.getElementById("btnExcluir")

    btnExcluir.addEventListener('click', async () => {
        var retorno = this.confirm("Deseja mesmo excluir o projeto? ")

        if (retorno) {
            this.alert('Excluiu')


            var header = {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(
                    {  }
                )
            }


            await this.fetch("http://192.168.0.118:8080/api/projeto/deleteProjectById/1", header)
                .then(function (response) {
                   return true
                })
                .catch(function (exception) {
                    console.log("Error e: " + exception)
                })

        }

    })
}

