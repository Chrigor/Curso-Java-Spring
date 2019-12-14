// var dados = [
//     {
//         cliente: {
//             "id": 1,
//             nome: "Teste iv1",
//             descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
//             cnpj: "12345678",
//             url: "https://images-platform.99static.com/RVysVSH9ZVebMjAxHoQ42eJcIg4=/200x200:1798x1798/500x500/top/smart/99designs-contests-attachments/86/86958/attachment_86958374"
//         },
//         consultor: {
//             nome: "Chrigor",
//             cargo: "Estag",
//             cpf: "12345678",
//             id: 1
//         },
//         nome: "PROJETO CARREFOUR",
//         url: "https://image.freepik.com/free-vector/abstract-background-with-colorful-geometric-shapes_23-2147850466.jpg",
//         descr: "suduashduhas uasduashduhas asduydsauasdu asduhasduhasd asduhasduh",
//         id: 1
//     },
//     {
//         cliente: {
//             id: 2,
//             nome: "Teste iv2",
//             descricao: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//             cnpj: "87654321",
//             url: "https://www.publicitarioscriativos.com/wp-content/uploads/2016/08/320.jpg"
//         },
//         consultor: {
//             nome: "Roberto Carlos",
//             cargo: "Dev",
//             cpf: "87654321",
//             id: 2
//         },
//         nome: null,
//         url: "https://i1.wp.com/www.euax.com.br/wp-content/uploads/2019/04/o-que-e-um-projeto.png?w=1140&ssl=1",
//         descr: "lorem ipusm catiau ratitiioa asuda hsaduhasu",
//         id: 2
//     }
// ]

var dados;

window.onload = async function () {
    var btnLogar = document.getElementById("btnLogar")
    btnLogar.addEventListener('click', logar)

    dados = await this.carregarProjetos()

    this.console.log(dados)
}


function logar() {
    var user = document.getElementById("userName")
    var senha = document.getElementById("password")

    var ids = getIDsProjects()
    var id = Number(user.value)
    if (ids.indexOf(id) != -1 && senha.value == "123") {

        var objProjeto = getProjetoById(user.value)
        var projeto = JSON.stringify(objProjeto)

        sessionStorage.setItem('projetoAtual', projeto);
        window.location.href = "home.html";
    } else {
        console.log("deu ruim")
    }
}

function getIDsProjects() {
    var ids = dados.map((e) => {
        return e.id
    })

    return ids
}

function getProjetoById(id){
    for(let i =0; i < dados.length; i++){
        if(dados[i]["id"] == id){
            return dados[i]
        }
    }
}

async function carregarProjetos() {
    return await fetch("http://192.168.0.118:8080/api/projeto/getAllProjects")
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

