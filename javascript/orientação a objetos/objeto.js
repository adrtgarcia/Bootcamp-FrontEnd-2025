const aluno = {
    nome: "amanda",
    idade: 20,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);
aluno.descrever();

aluno.idade = 21;
console.log(aluno);

aluno.cra = 80;
console.log(aluno);

delete aluno.idade;
console.log(aluno);

console.log(aluno['nome']);