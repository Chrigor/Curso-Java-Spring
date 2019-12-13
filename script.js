var arrayObjAutentication = []


window.onload = async function () {
    var btnLogar = document.getElementById("btnLogar")
    btnLogar.addEventListener('click', logar)

    await this.carregarProjetos()
}


function logar() {
    console.log("Opa logou")
}

async function carregarProjetos() {
    await fetch("192.168.0.118:8080/api/projeto/getAllProjects")
        .then((response) => {
            return response.json()
        }).catch((e)=>{
            console.log("Error: "+ e)
        })
}

function factoryProjects(nome = "") {
    return {
        nome
    }
}