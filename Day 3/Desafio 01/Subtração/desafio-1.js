/*
imagine que voce tem algumas variaveis com compras no cartão de credito,
e uma com um valor a ser estornado de uma compra errada,
calcule o total da fatura atualizado 
*/

const compras = {
  compra1: 200,
  compra2: 150,
  compra3: 300,
  estorno: 50,
};

const totalFatura =
  compras.compra1 + compras.compra2 + compras.compra3 - compras.estorno; // Soma das compras e subtrai o estorno
console.log(`O total da fatura atualizado é: R$ ${totalFatura}`); // Exibe o total da fatura atualizado
