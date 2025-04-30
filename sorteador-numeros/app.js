function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let doNum = parseInt(document.getElementById("de").value);
    let ateNum = parseInt(document.getElementById("ate").value);
    let inputVazio = isNaN(doNum) ? "insira um número em: 'Do número'" :  "insira um número em: 'Até o número'";
    let sorteados = [];
    let numero;

    if (isNaN(doNum) || isNaN(ateNum)){
        alert(inputVazio);
        return;
    } else if (doNum >= ateNum) {
        alert("Por favor, reveja os dados inserido: 'Do número' é maior que 'Até o número'");
        return;
    } else if (quantidade > (ateNum - doNum + 1)) {
        alert("'quantidade' é maior do que o intervalo ('Do número' - 'Até o número')");
        return;
    } else {
    for (let i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(doNum, ateNum);
        
        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(doNum, ateNum);
        }

        sorteados.push(numero);
    }

    let textResultado = document.getElementById("resultado");
    if (sorteados.length >= 1){
        textResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    } else {
        return
    }
    alterarStatusBotao(true);
}
    }

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(desabilitado) {
    let botao = document.getElementById("btn-reiniciar");
    if (desabilitado) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao()
}