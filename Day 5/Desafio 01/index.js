/*
DESAFIO 01: Rendimento de aplicação financeira

Suponha que você investiu R$ 1.000 em uma aplicação financeira que rende 12% ao ano. Usando um loop for,
podemos calcular como esse investimento cresce ao longo do tempo,
vamos supor nos próximos 10 anos. Mostre o valor no console por ano.

*/

let valorInicial = 1000; // Valor inicial do investimento
let taxaJuros = 0.12; // Taxa de juros anual
let anos = 10; // Número de anos


for (i = 1; i <= anos; i++) {
    valorInicial *= (1 + taxaJuros); // Aplica a taxa de juros ao valor inicial
    console.log(`Ano ${i}: R$ ${valorInicial.toFixed(2)}`); // Exibe o valor do investimento após cada ano
    console.log(i)
}
 