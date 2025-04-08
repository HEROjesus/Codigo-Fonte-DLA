/*
Crie duas variaveis que contem o total de horas trabalhadas e o valor por hora.
calcule o total a receber depois de trabalhar 160 horas 
*/

const horasTrabalhadas = 160;
const valorPorHora = 20.5; // valor por hora em reais

const totalAReceber = horasTrabalhadas * valorPorHora; // total a receber em reais
console.log(`Total a receber: R$ ${totalAReceber.toFixed(2)}`); // exibe o total a receber formatado com duas casas decimais
