/*

Suponha que você comprou um produto e optou por parcelar o valor em 12 vezes sem juros.
Escreva um código que imprima o valor de cada parcela e o valor restante a ser pago.

*/

const valorProduto = 1200; // Valor total do produto
const parcelas = 12; // Número de parcelas

for (let i = 1; i <= parcelas; i++) {
    const valorParcela = valorProduto / parcelas; // Valor de cada parcela
    const valorRestante = valorProduto - (valorParcela * (i - 1)); // Valor restante a ser pago

    console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)} | Valor restante: R$ ${valorRestante.toFixed(2)}`);
}