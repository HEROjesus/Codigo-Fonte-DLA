/* 
Suponha que você está programando um sistema PDV e precisa calcular
o desconto aplicado a um produto.

O desconto é dado com base no tipo do produto:
"Alimentos" têm um desconto de 5%,
"Eletrônicos" têm um desconto de 10%,
"Roupas" têm um desconto de 20% e 
"Livros" têm um desconto de 50%. Se o tipo do produto não estiver na lista,
não há desconto. 
Crie um código usando switch que calcule e imprima o valor final 
do produto após a aplicação do desconto, com base no tipo do produto.
*/

const tiposDeProduto = ["Alimentos", "Eletrônicos", "Roupas", "Livros"];
const produtos = {
  biscoitos: { tipo:  "Alimentos",   preco: 20  },
  celular:   { tipo:  "Eletrônicos", preco: 1000 },
  camiseta:  { tipo:  "Roupas",      preco: 50   },
  livro:     { tipo:  "Livros",      preco: 30   },
  cabeceira: { tipo:  "Móveis",      preco: 200}
};

const acharDesconsto = (tipo, preco) => {
    let desconto;
    switch (tipo) {
        case "Alimentos":
        desconto = 0.05;
        break;
        case "Eletrônicos":
        desconto = 0.10;
        break;
        case "Roupas":
        desconto = 0.20;
        break;
        case "Livros":
        desconto = 0.50;
        break;
        default:
        desconto = 0;
    }
    return preco - (preco * desconto);
}

console.log(acharDesconsto(produtos.biscoitos.tipo, produtos.biscoitos.preco)); // 20
