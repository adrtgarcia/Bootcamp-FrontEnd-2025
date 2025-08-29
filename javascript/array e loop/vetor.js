const aluno1 = "joão";
const aluno2 = {nome: 'joão'};

const alunos = ["joão", "maria", "josé", "ana"];
console.log(alunos);
console.log(alunos[1]);

alunos.pop(); // remove o último
console.log(alunos);

alunos.shift(); // remove o primeiro
console.log(alunos);

alunos.push("marina"); // adiciona no final 
console.log(alunos);

alunos[1] = "pedro"; // adiciona em posição específica
console.log(alunos);
