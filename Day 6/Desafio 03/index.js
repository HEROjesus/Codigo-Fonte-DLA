/*
Volte ao dia 5, no desafio 1, e crie uma função que fará todo o cálculo que detalhamos no desafio.
Você tem um valor inicial de uma aplicação financeira que rende um percentual ao ano. 
Calcule como esse investimento cresce no decorrer do ano.
*/

const calcularRendimento = (investimentoInicial, taxaJuros) => {
    let rendimento = investimentoInicial;
    const anos = 10; // Número de anos para o cálculo

    for (let i = 0; i < anos; i++) {
        rendimento += rendimento * (taxaJuros / 100).toFixed(2); // Calcula o rendimento para o ano atual
        console.log(`Ano ${i + 1}: R$${rendimento.toFixed(2)}`); // Exibe o rendimento acumulado a cada ano
    }

    return rendimento;
}

calcularRendimento(1000, 5); // Exemplo de uso da função com investimento inicial de R$1000 e taxa de 5% ao ano


/*
Ano 2: R$1102.50
Ano 3: R$1157.63
Ano 4: R$1215.51
Ano 5: R$1276.28
Ano 6: R$1340.10
Ano 7: R$1407.10
Ano 8: R$1477.46
Ano 9: R$1551.33
Ano 10: R$1628.89
*/