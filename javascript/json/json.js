let invoice = {
    nome: "maria",
    idade: 25,
    produtos: [
        ["mouse", 120.50],
        ["monitor", 899.99],
        ["teclado", 529.90]
    ]
}

console.log(invoice);

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.nome}`);
    console.log(`A idade é ${invoice.idade}`);
    console.log(`Os produtos são:`);

    for(let i in invoice.produtos) {
        let [nome, preco] = invoice.produtos[i];
        console.log(`> ${nome}: R$ ${preco}`);
    }
}

generateInvoice(invoice);