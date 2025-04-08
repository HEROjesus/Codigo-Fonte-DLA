/*
imagine que na sua casa 3 pessoas ganham salarios diferentes, 
some eles para saber o ganho total
*/
pessoasDaCasa = {
  pessoa1: {
    nome: "Lucas",
    idade: 25,
    salario: 3000,
    hobbies: ["futebol", "video game", "programação"],
  },
  pessoa2: {
    nome: "Ana",
    idade: 22,
    salario: 2500,
    hobbies: ["leitura", "dança", "fotografia"],
  },
  pessoa3: {
    nome: "Carlos",
    idade: 30,
    salario: 4000,
    hobbies: ["caminhada", "ciclismo", "cozinha"],
  },
};

const somaSalarios = () => {
  const salarioTotal =
    pessoasDaCasa.pessoa1.salario +
    pessoasDaCasa.pessoa2.salario +
    pessoasDaCasa.pessoa3.salario;

  console.log(`O ganho total da casa é: R$ ${salarioTotal}`);
};

somaSalarios();
// Exibe o ganho total da casa
