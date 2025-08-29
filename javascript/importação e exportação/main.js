// const funcoes = require('./funcoes-aux');
const {gets, print} = require('./funcoes-aux');

// exercício sorteio

let maior = -1;

while(true) {
    let numero = gets();
    if(numero === undefined) {
        break;
    }
    if(numero > maior) {
        maior = numero;
    }
}

print("Maior número sorteado: " + maior);

/* let sorteados = [];
let maior = -1;

while(true) {
    let numero = gets();
    if(numero === undefined) {
        break;
    }
    sorteados.push(numero);
}

for(let i = 0; i < sorteados.length; i++) {
    if(sorteados[i] > maior) {
        maior = sorteados[i];
    }
}

print("Maior número sorteado: " + maior); */