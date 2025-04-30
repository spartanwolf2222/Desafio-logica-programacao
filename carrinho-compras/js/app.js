let lista = document.getElementById('lista-produtos');
let valorDoCarrinho = document.getElementById('valor-total');

function adicionar() {
    let produto = document.getElementById('produto');
    let produtoSelecionado = produto.options[produto.selectedIndex].value
    let quantidade = document.getElementById('quantidade').value;
    let valor = extrairNumeros(produtoSelecionado);
    let nomeProduto = produtoSelecionado.split(' - R$')[0];

    if (quantidade !== '') {
        let novoProdutoSection = document.createElement('section');
        novoProdutoSection.classList.add('carrinho__produtos__produto');

        let quantidadeSpan = document.createElement('span');
        quantidadeSpan.classList.add('texto-azul');
        quantidadeSpan.textContent = quantidade + 'x';

        let nomeProdutoSpan = document.createTextNode(' ' + nomeProduto + ' ');

        let valorSpan = document.createElement('span');
        valorSpan.classList.add('texto-azul');
        valorSpan.textContent = "R$" + (valor * quantidade);

        novoProdutoSection.appendChild(quantidadeSpan);
        novoProdutoSection.appendChild(nomeProdutoSpan);
        novoProdutoSection.appendChild(valorSpan);
        lista.appendChild(novoProdutoSection);
        } else {
            alert('quantidade não informado!');
        }

        let campoQuantidade = document.querySelector('input');
        campoQuantidade.value = '';
        atualizarTotal(quantidade, valor);

}

function extrairNumeros(str) {
    return str.replace(/[^\d]+/g, '');
}

function atualizarTotal(quant, valProd) {
    let valorAtual = parseFloat(valorDoCarrinho.innerHTML.replace('R$', ''));
    let novoValor = valorAtual + (quant * valProd);
    valorDoCarrinho.innerHTML = 'R$' + novoValor;
}

function limpar() {
    lista.innerHTML = '<section class="carrinho__produtos__produto"></section>';
    valorDoCarrinho.innerHTML = 'R$0';
}