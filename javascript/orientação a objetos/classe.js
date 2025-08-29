class Aluno {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const maria = new Aluno();
console.log(maria);

maria.nome = "maria";
maria.idade = 25;
console.log(maria);

const joao = new Aluno("joao", 27);
console.log(joao);

function compararIdade(aluno1, aluno2) {
    if(aluno1.idade > aluno2.idade) {
        console.log(`${aluno1.nome} é mais velho(a) que ${aluno2.nome}`);
    } else if(aluno1.idade < aluno2.idade) {
        console.log(`${aluno2.nome} é mais velho(a) que ${aluno1.nome}`);
    } else {
        console.log(`${aluno2.nome} e ${aluno1.nome} têm a mesma idade`);
    }
}

compararIdade(maria, joao);


// exercício do carro

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularValorPercurso(distancia, precoCombustivel) {
        return distancia * gastoMedio * precoCombustivel;
    }
}

const carro = new Carro("fiat", "preto", 0.5);
console.log(carro);


// exercício pessoa
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    classificarImc() {
        let imc = this.calcularImc();
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
}

const pessoa = new Pessoa("josé", 70, 1.75);
console.log(pessoa);
console.log(`O IMC de ${pessoa.nome} é ` + pessoa.calcularImc());
console.log(`A classificação do IMC de ${pessoa.nome} é: ` + pessoa.classificarImc());