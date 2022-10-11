var bd = openDatabase("meuDB", "1.0", "meu Banco de Dados", 4080);
bd.transaction(function (criar) {
    criar.executeSql(
        "CREATE TABLE clientes(nome TEXT, endereço TEXT, conta INTEGER)"
    );
});

function salvarCliente() {
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let conta = document.getElementById("conta").value;
    
    bd.transaction(function (inserir){
        inserir.executeSql("INSERT INTO clientes (nome, endereço, conta) VALUES (?, ?, ?)",[nome, endereco, conta]);
    });
};
