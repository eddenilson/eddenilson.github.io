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
    } else {
        // alert("impar")
        document.getElementById("mostra").innerHTML = "numero impar ";
    }
}

function mostraCampo() {
    let numeroMinimo = parseFloat(document.getElementById("campoMinimo").value);

    let numeroMaximo = parseFloat(document.getElementById("campoMaximo").value);

    let quantidadeNumero = parseFloat(document.getElementById("campoQuantidade").value);

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
function mega(){
    
    let numerosJogo = parseFloat(document.getElementById ("capoLimpo").value)
    
    let jogo = [];
        for (let i = 0; i < numerosJogo; i++) {
        console.log(criaJogo())
    };
    function criaJogo() {
        for (let i = 0; i < 6; i++) {
            
            let numero = Math.floor(Math.random() * 60) + 1
            while (jogo.includes(numero)) {
                numero = Math.floor(Math.random() * 60) + 1
            };
            jogo.push(numero)
        };
        jogo.sort(ordenaCrescente)
        return jogo
    };
    function ordenaCrescente(n1, n2) {
        return n1 - n2
    }
    document.getElementById("open").innerHTML = jogo;
};

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
