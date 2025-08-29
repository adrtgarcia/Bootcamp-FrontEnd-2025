// exercício do combustível

let precoEtanol = 2.8;
let precoGasolina = 4.2;
let tipoCombustivel = "etanol";
let gastoMedio = 2;
let distanciaViagem = 200;
let valorGasto = 0;

if(tipoCombustivel === "etanol") {
    valorGasto = precoEtanol * distanciaViagem * gastoMedio;
} else if(tipoCombustivel === "gasolina") {
    valorGasto = precoGasolina * distanciaViagem * gastoMedio;
} else {
    console.log("Tipo de combustível inválido");
}

console.log("Valor da viagem: R$ " + valorGasto.toFixed(2));


// exercício das notas
let nota1 = 7, nota2 = 5, nota3 = 10;
let media = (nota1 + nota2 + nota3) / 3;
let classificacao;

if(media < 5) {
    classificacao = "reprovação";
} else if(media >= 5 && media <= 7) {
    classificacao = "recuperação";
} else {
    classificacao = "aprovação";
}

console.log("Média do aluno: " + media);
console.log("Classificação do aluno: " + classificacao);


// exercício do imc
let peso = 72, altura = 1.75;
let imc = peso / (altura * altura);
console.log("Valor do IMC: " + imc);

if(imc < 18.5) {
    console.log("Abaixo do peso");
} else if(imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if(imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else if(imc >= 30 && imc < 40) {
    console.log("Obeso");
} else {
    console.log("Obesidade grave");
}


// exercício do produto
let totalProduto;
let precoEtiqueta = 45.50;
let escolhaPagamento = "pix";

if(escolhaPagamento === "débito") {
    totalProduto = precoEtiqueta - precoEtiqueta * 0.10;
    // totalProduto = precoEtiqueta * 0.90;
} else if(escolhaPagamento === "dinheiro" || escolhaPagamento === "pix") {
    totalProduto = precoEtiqueta - precoEtiqueta * 0.15;
    // totalProduto = precoEtiqueta * 0.85;
} else if(escolhaPagamento === "duas vezes") {
    totalProduto = precoEtiqueta;
} else {
    totalProduto = precoEtiqueta + precoEtiqueta * 0.10;
    // totalProduto = precoEtiqueta * 1.10;
}

console.log("Valor a ser pago: R$ " + totalProduto.toFixed(2));