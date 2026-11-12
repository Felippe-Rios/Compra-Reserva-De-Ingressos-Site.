function comprar() {
    //recuperar as informações necessarias
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    //agora e fazer funcionar o botao comprar
    if (tipoDeIngresso == 'pista') {
        comprarPista(qtd);
    } else if (tipoDeIngresso == 'inferior') {
        comprarInferior(qtd);
    } else {
        comprarSuperior(qtd);
    }

}
    // aqui a função deve dmiminuir a quantidade de ingressos de pista, e atualizar o valor no html
    // ou seja deve diminuir quantidadePista de acordo com a quantidade inserida, e atualizar o valor no html
    
function comprarPista(qtd) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > quantidadePista) {
        alert('Quantidade de ingressos insuficiente');
    } else { 
        quantidadePista = quantidadePista - qtd;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('compra realizada!');
    }
}

function comprarInferior(qtd) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > quantidadeInferior) {
        alert('Quantidade de ingressos insuficiente');
    } else { 
        quantidadeInferior = quantidadeInferior - qtd;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('compra realizada!');
    }
}

function comprarSuperior(qtd) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > quantidadeSuperior) {
        alert('Quantidade de ingressos insuficiente');
    } else { 
        quantidadeSuperior = quantidadeSuperior - qtd;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('compra realizada!');
    }
}