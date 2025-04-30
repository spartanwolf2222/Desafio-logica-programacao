function comprar() {
    let ingressoSelecionado = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let qntIngressoDisponivel = {
        'inferior' : document.getElementById('qtd-inferior'),
        'superior' : document.getElementById('qtd-superior'),
        'pista' : document.getElementById('qtd-pista')
    };
    let qntIngressos = qntIngressoDisponivel[ingressoSelecionado];
    let qntDisponivel = parseInt(qntIngressos.textContent);
    let ingressosRestante = qntDisponivel- quantidade;

    if (quantidade < 0) {
        alert('Erro: A quantidade deve ser um número positivo');
    } else if (!quantidade) {
        return;
    } else {
    if (ingressosRestante >= 0) {
        qntIngressos.textContent = ingressosRestante;
        alert(`Sua compra do tipo ${ingressoSelecionado} foi concluida com sucesso!`);
    } else {
        alert('Valor solicitado é maior que o disponível, por favor, verifique e tente novamente');
    }
}
}