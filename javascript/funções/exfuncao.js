// exemplo nome
function escreverNome(nome) {
    console.log("Meu nome é " + nome);
}

// exemplo idade
function conferirIdade(idade) {
    if(idade < 18) {
        console.log("Não é maior de idade");
    } else {
        console.log("É maior de idade");
    }
}

// exemplo preço
function aplicarDesconto(valor, desconto) {
    return valor -= valor * desconto;
}

function aplicarJuros(valor, juros) {
    return valor += valor * juros;
}

function calcularPreco(valor, formaPagamento) {
    if(formaPagamento === "débito") {
        return aplicarDesconto(valor, 0.10);
    } else if(formaPagamento === "dinheiro" || formaPagamento === "pix") {
        return aplicarDesconto(valor, 0.15);
    } else if(formaPagamento === "duas vezes") {
        return valor;
    } else {
        return aplicarJuros(valor, 0.10);
    }
}

function main() {
    let nome = "amanda";
    escreverNome(nome);

    let idade = 20;
    conferirIdade(idade);

    let valor = 80;
    let formaPagamento = "dinheiro";
    console.log("Valor do produto: R$ " + calcularPreco(valor, formaPagamento));
}

main();