/*
Calcule o IMC de uma pessoa (que é divivido pelo peso em kg pela altura em metros ao quadrado).
Se o resultado ficar menor que 18.5, mostre que está Abaixo do peso;
Se for maior ou ighual a 18.5 e menor que 24.9, mostre que está com o peso normal;
Se for maior ou igual a 25 e menor que 29.9, mostre que está com sobrepeso;
*/

const readline = require("readline-sync");
const peso = readline.questionFloat("Qual o seu peso em kg? ");
const altura = readline.questionFloat("Qual a sua altura em metros? ");
const imc = Math.round(peso / (altura * altura));

if (imc < 18.5) {
  console.log(`Você está abaixo do peso. e seu IMC é ${imc}` );
} else if (imc >= 18.5 && imc < 24.9) {
  console.log(`Você está com o peso normal. e seu IMC é ${imc}` );
} else if (imc >= 25 && imc < 29.9) {
  console.log(`Você está com sobrepeso. e seu IMC é ${imc}` );
}

