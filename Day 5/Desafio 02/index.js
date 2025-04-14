/*
Imagine que você é um engenheiro da NASA e está prestes a lançar um foguete. 
Você precisa fazer uma contagem regressiva a partir de 10 até o lançamento. No entanto, 
quando chegar nos últimos 3 segundos, é importante dar um aviso, então inclua o texto "Atenção!" junto à contagem. 
Quando a contagem terminar mostre a mensagem: "Lançamento do foguete!"
*/



let contagemRegressiva = 10; // Valor inicial da contagem regressiva

while(contagemRegressiva >= 0) {
    if (contagemRegressiva <= 3 && contagemRegressiva > 0) {
        console.log("Atenção!");
    }

    if (contagemRegressiva > 0) {
        console.log("Lançamento do foguete! começa em", contagemRegressiva);
    } else {
        console.log("🚀 Lançamento do foguete!");
    }
    contagemRegressiva--; // Decrementa o valor da contagem regressiva

}


   