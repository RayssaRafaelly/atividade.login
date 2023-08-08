var nome = [];
var data = [];
var hora = [];
var remedio = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    let dataUser = document.getElementById("dataUser").value;  
    let horaUser = document.getElementById("horaUser").value;
    let remedioUser = document.getElementById("remedioUser").value;
    if (nomeUser) {
    nome.push(nomeUser);
    data.push(dataUser);
    hora.push(horaUser);
    remedio.push(remedioUser);
    criarLista();
    document.getElementById("nomeUser").value = '';
    document.getElementById("dataUser").value = '';
    document.getElementById("horaUser").value = '';
    document.getElementById("remedioUser").value = '';
    }  
}

function criarLista() {
    let table = document.getElementById("tabela").innerHTML = "<tr><th>Nome</th><th>Data</th><th>Horário</th><th>Remédio</th><th>Ações</th></tr>";

    for (let i = 0; i <= (nome.length - 1); i++) {

        table += "<tr><td>" + nome[i] + "</td><td>" + data[i] + "</td><td>" + hora[i] + "</td><td>" + remedio[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'> Excluir </button> </td></tr>";

        document.getElementById('tabela').innerHTML = table;

    }
}

function editar(i){
document.getElementById('nomeUser').value = nome[(i - 1)];
document.getElementById('dataUser').value = data[(i - 1)];
document.getElementById('horaUser').value = hora[(i - 1)];
document.getElementById('remedioUser').value = remedio[(i - 1)];
nome.splice(nome[(i - 1), 1]);
data.splice(data[(i - 1), 1]);
hora.splice(hora[(i - 1), 1]);
remedio.splice(remedio[(i - 1), 1]);
}


function excluir(i){
nome.splice(nome[(i - 1), 1]);
nome.splice(data[(i - 1), 1]);
nome.splice(hora[(i - 1), 1]);
nome.splice(remedio[(i - 1), 1]);
document.getElementById('nomeUser').value = nome[(i - 1)];
document.getElementById('dataUser').value = data[(i - 1)];
document.getElementById('horaUser').value = hora[(i - 1)];
document.getElementById('remedioUser').value = remedio[(i - 1)];
console.log(nome);
console.log(data);
console.log(hora);
console.log(remedio);
}
