/*
Crie um algoritmo que precisa dizer para um aluno como foi sua performance em uma prova a partir da nota que ele tirou.

As regras são:
1. Se a nota for menor que 5, então mostre que foi `Insuficiente`;
2. Se foi menor que 6, então mostre `Regular`;
3. Se foi menor que 7.5, mostre `Bom`
4. Se foi menor que 9, `Muito bom`;
5. E finalmente se for maior ou igual a 9, mostre `Excelente`.
*/

const nota = 10; // Altere esse valor para testar diferentes notas

if (nota < 5) {
    console.log(`${nota} Insuficiente`);
}
else if (nota < 6) {
    console.log(`${nota} Regular`);
}
else if (nota < 7.5) {
    console.log(`Bom`);
}
else if (nota < 9) {
    console.log(`${nota} Muito bom`);
}
else if (nota >= 9) {
    console.log(`${nota} Excelente`);
}