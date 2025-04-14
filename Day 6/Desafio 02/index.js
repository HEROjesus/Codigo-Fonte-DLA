/*
Transforme o codigo que criamos no dia 4 sobre os dias da semana em uma função
chamada obterDiaDaSemana
Receba um número de 1a 7 e retorne esse dia por extenso.

*/


const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

const obterDiaDaSemana = (numero) => {
    if (numero < 1 || numero > 7) {
        return "Número inválido!"
    } else {
        return diasDaSemana[numero - 1]
    }
}

console.log(obterDiaDaSemana(1)) 