/*
Desafio 4 - Condição ternária com expressão mais complexa

Um cliente possui uma conta em uma loja com um certo saldo para compras e 
uma condição que indica se a conta está ativa ou não.
Sua tarefa é escrever um código que determine se o cliente pode fazer compras com sua conta.
As condições para poder comprar são: a conta precisa estar ativa (ou seja, o cliente não deve estar inativo)
e o saldo deve ser maior que 500. Use a condição ternária para isso.
*/

const contaAtiva = true; // Indica se a conta está ativa
const saldo = 600; // Saldo do cliente

// Verifica se o cliente pode fazer compras
const statusConta = contaAtiva && saldo >= 500 
    ? "Conta ativa e saldo suficiente para compras" 
    : "Conta inativa ou saldo insuficiente";

console.log(statusConta);