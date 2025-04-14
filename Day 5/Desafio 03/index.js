/*
Vamos calcular quanto tempo (em anos) levará para que um investimento inicial dobre,
considerando uma taxa de juros de 5% ao ano. 

Use um loop while para realizar os cálculos.
*/


let investimentoInicial = 1000; // Valor inicial do investimento
let taxaJuros = 0.05; // Taxa de juros anual
let anos = 0; // Contador de anos

let valorFinal = investimentoInicial * 2; // Valor final desejado (dobro do investimento inicial)

while (investimentoInicial < valorFinal) {
    investimentoInicial += investimentoInicial * taxaJuros; // Aplica a taxa de juros ao valor inicial
    anos++; // Incrementa o contador de anos
    console.log(`Ano ${anos}: R$${investimentoInicial.toFixed(2)}`);
}

console.log(`Serão necessários ${anos} anos para dobrar o investimento.`);
