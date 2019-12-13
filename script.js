var dados = [
    {
        cliente: {
            "id": 1,
            nome: "Teste iv1",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            cnpj: "12345678",
            url: null
        },
        consultor: {
            nome: "Chrigor",
            cargo: "Estag",
            cpf: "12345678",
            id: 1
        },
        nome: null,
        url: "https://ibb.co/HKBhjRc",
        descr: null,
        id: 1
    },
    {
        cliente: {
            id: 2,
            nome: "Teste iv2",
            descricao: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
            cnpj: "87654321",
            url: null
        },
        consultor: {
            nome: "Roberto Carlos",
            cargo: "Dev",
            cpf: "87654321",
            id: 2
        },
        nome: null,
        url: null,
        descr: null,
        id: 2
    }
]



window.onload = async function () {
    var btnLogar = document.getElementById("btnLogar")
    btnLogar.addEventListener('click', logar)
}


function logar() {
    var user = document.getElementById("userName")
    if (user) {

        var projeto = JSON.stringify(dados[0])
        
        sessionStorage.setItem('projetoAtual', projeto);
        window.location.href = "home.html";
    }
}

async function carregarProjetos() {
    await fetch("192.168.0.118:8080/api/projeto/getAllProjects")
        .then((response) => {
            return response.json()
        }).catch((e) => {
            console.log("Error: " + e)
        })
}

function factoryProjects(nome = "") {
    return {
        nome
    }
}

