function mostraNome() {
    let nome = document.getElementById("campoNome").value;
    // alert (nome)
    // document.getElementById("cabeçalio").innerHTML = "Olá, " + nome + "!!!!"
    document.getElementById("vazio").innerHTML = nome;
}

function mostraNumero() {
    let numero = document.getElementById("campoNumero").value;

    if (numero % 2 == 0) {
        // alert("numero par")
        document.getElementById("mostra").innerHTML = "numero par ";
    } else if (numero % 1 == 0){
        // alert("impar")
        document.getElementById("mostra").innerHTML = "numero impar ";
    } else {
        document.getElementById("mostra").innerHTML = "inválido ";

    }
}

function mostraCampo() {
    let numeroMinimo = parseFloat(document.getElementById("campoMinimo").value);

    let numeroMaximo = parseFloat(document.getElementById("campoMaximo").value);

    let quantidadeNumero = parseFloat(
        document.getElementById("campoQuantidade").value
    );
    let valores = [];
    for (let i = 0; i < quantidadeNumero; i++) {
        valores.push(
            Math.floor(Math.random() * (numeroMaximo - numeroMinimo)) +
                numeroMinimo
        );
    }

    document.getElementById("resultado").innerHTML = valores;
}

function regras() {
    let idadePessoa = parseFloat(document.getElementById("idade").value);

    if (idadePessoa <= 14) {
        document.getElementById("opcao").innerHTML = "Estudante";
    } else if (idadePessoa >= 15 && idadePessoa <= 64) {
        document.getElementById("opcao").innerHTML = "Trabalhador Ativo";
    } else {
        document.getElementById("opcao").innerHTML = "aposentado";
    }
}

function soma() {
    let calculo1 = parseFloat(document.getElementById("calcular1").value);
    let calculo2 = parseFloat(document.getElementById("calcular2").value);
    let resultado = calculo1 + calculo2;

    document.getElementById("total").innerHTML = resultado;
}
function subtracao() {
    let calculo1 = parseFloat(document.getElementById("calcular1").value);
    let calculo2 = parseFloat(document.getElementById("calcular2").value);
    let resultado = calculo1 - calculo2;

    document.getElementById("total").innerHTML = resultado;
}

function multiplicacao() {
    let calculo1 = parseFloat(document.getElementById("calcular1").value);
    let calculo2 = parseFloat(document.getElementById("calcular2").value);
    let resultado = calculo1 * calculo2;

    document.getElementById("total").innerHTML = resultado;
}
function divisao() {
    let calculo1 = parseFloat(document.getElementById("calcular1").value);
    let calculo2 = parseFloat(document.getElementById("calcular2").value);
    let resultado = calculo1 / calculo2;

    document.getElementById("total").innerHTML = resultado;
}
