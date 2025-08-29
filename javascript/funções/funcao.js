function hello() {
    console.log("hello world");
}

function quadrado(valor) {
    return valor * valor;
}

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if(imc < 18.5) {
        return "Abaixo do peso";
    } else if(imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if(imc >= 25 && imc < 30) {
        return "Acima do peso";
    } else if(imc >= 30 && imc < 40) {
        return "Obeso";
    } else {
        return "Obesidade grave";
    }
}

function main() {
    hello();

    let valor = 3;
    let resultado = quadrado(3);
    console.log("Quadrado de " + valor + " é " + resultado);

    let peso = 73;
    let altura = 1.73;
    let imc = calcularImc(peso, altura);
    console.log("IMC: " + imc);
    console.log("Classificação: " + classificarImc(imc));
}

main();

/*
    invocando funções imediatamente:
    (function main() {
        console.log("hello world");
    })();
*/