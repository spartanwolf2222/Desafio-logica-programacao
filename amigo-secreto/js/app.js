let amigos = [];
let sorteio = document.getElementById('lista-sorteio');
let lista = document.getElementById('lista-amigos');

function adicionar() {
    let adicionarAmigo = document.getElementById('nome-amigo');

    if (adicionarAmigo.value == '') {
        return;
    } else if (amigos.includes(adicionarAmigo.value.toUpperCase())) {
        alert ('Nome de participante já incluido na lista, por favor, colocar nome diferente!');
        return adicionarAmigo.value = '';
    } else if (lista.textContent == '') {
        lista.textContent = adicionarAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + adicionarAmigo.value;
    }

    amigos.push(adicionarAmigo.value.toUpperCase());
    adicionarAmigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {

    if (amigos.length <= 3) {
        alert ('Para sortear é necessário 4 ou mais participante!');
        return;
    } else if (sorteio.innerHTML !== '') {
        alert ('Aviso: Para um novo sorteio é necessário reiniciar!');
        return;
    }
    embaralhar(amigos);

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarLista() {
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function atualizarSorteio() {
    sorteio.innerHTML = '';
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function reiniciar() {
    amigos = [];
    lista.textContent = '';
    sorteio.innerHTML = '';
}

function desafio() {
    let array = ['fruta', 'legume', 'banana', 'maça'];
    let verificar = 'tio';
    if (array.includes(verificar)) {
        console.log(`Nessa array já tem o item: ${verificar}`);
    } else {
        console.log(`Nessa array não tem o item: ${verificar}`);
    }
}

desafio();