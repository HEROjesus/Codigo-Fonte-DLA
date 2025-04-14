/*
Crie uma função qie utiliza o pesoi e a altura como parametros
para calcular o IMC (Índice de Massa Corporal) de uma pessoa.

*/

const calcularIMC = (peso: number, altura: number) => {
    const imc = peso / (altura * altura);
    return imc;
}

console.log(calcularIMC(84, 1.83).toFixed(2));
 