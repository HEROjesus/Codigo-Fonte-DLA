/*
Crie um codigo usando switch que imprima uma mensagem adequada para motorista.
Osistema tem tres possiveis estados "aberto" "fechado" e "em manutençao".

*/

let estado = "aberto"; // Você pode alterar o valor para "fechado" ou "em manutenção" para testar outros casos

switch (estado) {
    case "aberto":
        console.log("O sistema está aberto. Você pode continuar sua viagem.");
        break;
    case "fechado":
        console.log("O sistema está fechado. Por favor, aguarde.");
        break;
    case "em manutenção":
        console.log("O sistema está em manutenção. Por favor, volte mais tarde.");
        break;
    default:
        console.log("Estado inválido. Por favor, verifique o status do sistema.");
}