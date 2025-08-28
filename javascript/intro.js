console.log("hello world");

// variáveis: string, number, boolean
let nome = "maria";
let sexo = 'f';
let idade = 25;
let estudante = true;

// arrays
let alunos = ["maria", "joão", "ana", "josé"];
console.log(alunos);
console.log(alunos[2]);

alunos.pop();
console.log("depois do pop: " + alunos);

alunos.sort();
console.log("depois do sort: " + alunos);

// matrizes
let notas = [
    ["maria", 10],
    ["joão", 8],
    ["ana", 7],
    ["josé", 9]
];
console.log(notas);
console.log("nota de " + notas[3][0] + " é " + notas[3][1]);
console.log("relatório: " + notas[2]);

console.log("tamanho da matriz: " + notas.length);
notas.sort();
console.log("depois do sort: " + notas);

// condicionais
let luzLigada = false;
if(luzLigada) {
    console.log("a luz está ligada");
} else {
    console.log("a luz está desligada");
}

let x = 2, y = 3;
if(x > 2) {
    console.log("x é maior que y");
} else if (y > x) {
    console.log("y é maior que x");
} else {
    console.log("x e y são iguais");
}

let z = 5;
if(z === 5) {
    console.log("z é 5");
} else {
    console.log("z não é 5");
}

// switch case
let fruta = "banana";
switch(fruta) {
    case "laranja":
        console.log("suco de laranja");
        break;
    case "banana":
        console.log("vitamina de banana");
        break;
    case "morango":
        console.log("iogurte de morango");
        break;
    default:
        console.log("sem opção no cardápio");
}

// loops
for(let i = 0; i < 5; i++) {
    console.log("no for: " + i);
}

i = 5;
while(i > 0) {
    console.log("no while: " + i);
    i--;
}

i = 5;
do {
    console.log("no do while:" + i);
    i--;
} while(i > 0);

