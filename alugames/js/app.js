let gamesAlugados = [];

function exibirQuantidadeDeJogosAlugados(){
    console.log(`Foi alugado ${gamesAlugados}`);
}

function alterarStatus(numero) {
    let game = document.getElementById(`game-${numero}`);
    let botao = game.querySelector("a");
    let img = game.querySelector("div");
    let nomeGame = game.querySelector(".dashboard__item__name").textContent

        if(botao.innerHTML == "Alugar"){
            botao.innerHTML = "Devolver";
            botao.classList.add("dashboard__item__button--return");
            img.classList.add("dashboard__item__img--rented");
            gamesAlugados++
        } else {
            if (confirm(`Você deseja devolver o jogo ${nomeGame}?`)) {
                botao.innerHTML = "Alugar";
            botao.classList.remove("dashboard__item__button--return");
            img.classList.remove("dashboard__item__img--rented");
            gamesAlugados--
            }
}
    exibirQuantidadeDeJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    gamesAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirQuantidadeDeJogosAlugados();
});

// desafio: fazer uma função que idetique um palíndromo (palavra que mesmo invertido não muda a palavra)

function VerificarPalavraPalindromo(palavra) {
    let separandoPalavra = palavra.split("");
    let invertendoPalavra = separandoPalavra.reverse("");
    let juntandoPalavra = invertendoPalavra.join("");
    if (palavra == juntandoPalavra) {
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }
}

VerificarPalavraPalindromo("rever");

// desafio: fazer uma função que ordene de forma crescente os números

let numero = [4,1,3,2];
numero.sort(function(a , b){
    return a - b;
});

console.log(`A ordem dos números é ${numero.join(", ")}`);