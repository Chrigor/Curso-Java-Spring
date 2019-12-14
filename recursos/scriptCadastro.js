window.onload =async function(){


    var clientes = await this.carregarClientes()
    
    var optionsClientes = clientes.map(element => {
        return this.getOption(element.nome, element.id)
    });

    this.console.log(optionsClientes)

    var select = document.getElementById("select_cliente")
    
    optionsClientes.forEach(element => {
        select.appendChild(element)
    });


    var consultores = await this.carregarConsultores()

    var optionsConsultores = consultores.map(element => {
        return this.getOption(element.nome, element.id)
    });

    var select = document.getElementById("select_consultores")

    optionsConsultores.forEach(element => {
        select.appendChild(element)
    });
}



async function carregarClientes() {
    return await fetch("http://192.168.0.118:8080/api/cliente/getAllClientes")
        .then((response) => {
            return response.json()
        }).catch((e) => {
            console.log("Error: " + e)
        })
}

async function carregarConsultores() {
    return await fetch("http://192.168.0.118:8080/api/consultor/getAllConsultores")
        .then((response) => {
            return response.json()
        }).catch((e) => {
            console.log("Error: " + e)
        })
}

function getOption(text,value){
    var option = document.createElement("option")
    option.value = value
    option.text = text

    return option
}