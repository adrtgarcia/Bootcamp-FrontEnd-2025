let notas = [];
let soma = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(7);

for(let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

console.log("Média das notas: " + soma/notas.length);

let nome = "amanda";
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// exercício tabuada
let numero = 7;
for(let i = 0; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}

// exercício pares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}