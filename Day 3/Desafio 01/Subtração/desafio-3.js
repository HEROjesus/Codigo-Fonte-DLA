/*
Imagine que em um jogo voce tenha um total de moedas e para cada vez que voce
compra um artefato voce gaste um determinado numero de moedas.
calcule a quanrtidade final de moedas 
*/

const totalMoedas = 1000; // Total de moedas
const custoArtefato = 50; // Custo de cada artefato

console.log("Total de moedas: " + totalMoedas);
console.log("Custo de cada artefato: " + custoArtefato);

console.log(
  "Voce comprou artefato seu dinheiro atual é : ",
  totalMoedas - custoArtefato,
  "moedas"
);
