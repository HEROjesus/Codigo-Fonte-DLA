/*
Vamos supor que estamos criando um sistema para controlar a renovação da carteira de motorista
 e precisamos saber em quanto tempo a mesma irá vencer de acordo com a legislação.

1. De acordo com a lei, se você está tirando a carteira pela 1ª vez (independentemente da sua idade), o tempo de vencimento dela é de 1 ano;

2. Se você tem idade inferior a 50 anos o vencimento é de 10 anos;

3. Se for igual ou superior a 50 anos ou inferior a 70 anos o vencimento é de 5 anos;

4. Mas se for igual ou superior a 70 anos o vencimento será de 3 anos.

Você deve criar variáveis e estruturas condicionais para controlar esse vencimento.
*/

const idade = 70; // idade do motorista
const primeiraVez = false; // se é a primeira vez que tira a carteira
let vencimento;

if (primeiraVez && idade <= 18) {
  vencimento = 1; // 1 ano
  console.log("Carteira de motorista vencida em 1 ano.");
} else if (idade < 50) {
  vencimento = 10; // 10 anos
  console.log("Carteira de motorista vencida em 10 anos.");
} else if (idade >= 50 && idade < 70) {
  vencimento = 5; // 5 anos
  console.log("Carteira de motorista vencida em 5 anos.");
} else if (idade >= 70) {
  vencimento = 3; // 3 anos
  console.log("Carteira de motorista vencida em 3 anos.");
}
