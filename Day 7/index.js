/*

SUPER DESAFIO:

Aplicação de Finanças
Como ainda não estudamos estrutura de dados e nem o conceito de listas e arrays, então o que iremos fazer, 
é criar 2 variáveis que controlam o saldo de 2 contas bancárias. As contas compartilham de um limite (que também será um outra variável), porém começa com 0.
A partir do momento que o saldo total das contas atingir R$1000,
o limite será de 10%. Utilizando um saldo inicial dessas contas, efetue alguns cálculos através de funções que façam o seguinte:

1. Calcular o saldo total das contas
2. Exibir um alerta caso alguma conta esteja sem saldo ou utilizando o limite 
3. Fazer depósito em alguma das contas
4. Efetuar débito em alguma das contas
5. Transferir um determinado valor de uma conta para outra, somente se tiver saldo disponível
6. Fazer a conversão do saldo (que está em R$) para dólar (US$)
7. Exibir o limite disponível
Só para complicar um pouco, se ao efetuar um depósito em uma conta ela estiver usando um limite, desconte do valor a ser depositado 15%.

*/


// Saldo das contas
let saldoConta1 = 600;
let saldoConta2 = 400;

// Limite inicial, juros e configurações de limite
let limite = 0;
let jurosLimite = 0;
const percentualLimite = 0.10; // 10%
const saldoMinimoLimite = 1000; // R$1000

// Taxa de conversão Dólar -> Real
const taxaConversaoDolar = 5.23;

function saldoTotal() {
  let total = saldoConta1 + saldoConta2;

  if (total >= saldoMinimoLimite) {
    limite = total * percentualLimite;
  }

  return total;
}

function alertaSaldo() {
  if (saldoConta1 <= 0) {
    console.log('Conta 1 está sem saldo ou utilizando o limite.');
  }

  if (saldoConta2 <= 0) {
    console.log('Conta 2 está sem saldo ou utilizando o limite.');
  }
}

function depositar(conta, valor) {
  if (conta === 1) {
    if (saldoConta1 < 0) {
      jurosLimite += valor * 0.15;
      valor *= 0.85;
    }
    saldoConta1 += valor;
  } else if (conta === 2) {
    if (saldoConta2 < 0) {
      jurosLimite += valor * 0.15;
      valor *= 0.85;
    }
    saldoConta2 += valor;
  }
}

function debitar(conta, valor) {
  if (conta === 1 && valor <= (saldoConta1 + limite)) {
    saldoConta1 -= valor;
  } else if (conta === 2 && valor <= (saldoConta2 + limite)) {
    saldoConta2 -= valor;
  } else {
    console.log('Saldo insuficiente para débito na conta ' + conta);
  }
}

function transferir(valor, contaOrigem, contaDestino) {
  if (contaOrigem === 1 && valor <= saldoConta1) {
    debitar(1, valor);
    depositar(contaDestino, valor);
  } else if (contaOrigem === 2 && valor <= saldoConta2) {
    debitar(2, valor);
    depositar(contaDestino, valor);
  } else {
    console.log('Saldo insuficiente para transferência na conta ' + contaOrigem);
  }
}

function converterSaldoParaDolar(conta) {
  if (conta === 1) {
    return saldoConta1 / taxaConversaoDolar;
  } else if (conta === 2) {
    return saldoConta2 / taxaConversaoDolar;
  }
}

function exibirLimite() {
  return limite;
}

function exibirJurosLimite() {
  return jurosLimite;
}

// Exemplo de uso
console.log('Saldo total: R$' + saldoTotal());
alertaSaldo();
depositar(1, 100);
debitar(2, 50);
transferir(200, 1, 2);
console.log('Saldo conta 1 em dólares: US$' + converterSaldoParaDolar(1));
console.log('Saldo conta 2 em dólares: US$' + converterSaldoParaDolar(2));
console.log('Limite: R$' + exibirLimite());
console.log('Juros do Limite: R$' + exibirJurosLimite());