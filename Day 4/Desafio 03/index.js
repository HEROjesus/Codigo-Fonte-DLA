/*

Desafio 03 - Condição Ternária
Transforme o código em uma condição ternária

let nota 85;
let status;
if (nota >= 70) {
status "aprovado";
} else {
status = "reprovado";
}
console.log(status);
100%

Analise esse código. Temos 2 variáveis, uma que controla a nota de um aluno e outra que representa o status de aprovação em uma disciplina.
Caso a nota seja maior ou igual a 70, então o aluno estará aprovado, caso contrário reprovado.

Com o que já foi explica, converta essa forma de condicional e uma condição ternária. Bem simples, hein?
*/

let nota = 80;
let status;

status = nota >= 70 ? `sua nota foi ${nota}. voce foi aprovado` : `sua nota foi ${nota}. voce foi reprovado`;
console.log(status);
