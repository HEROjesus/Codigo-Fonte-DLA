/*
Suponha que você está planejando uma viagem de carro.
 Seu carro faz 12 km por litro de gasolina, e você quer calcular o número de litros de combustível que você precisará para a viagem,
 bem como o custo total do combustível. 

Os dados que você tem são: 

- Distância total da viagem em quilômetros - Preço do litro de gasolina em reais 

O desafio é escrever um programa que recebe a distância da viagem e o preço da gasolina e calcula: 

Quantos litros de gasolina serão necessários para a viagem (considerando que o carro faz 12 km por litro) 

Quanto vai custar para abastecer o carro para a viagem 

 */

const carro = 12; // km por litro
const precodeGasolina = 5.79; // preço do litro de gasolina em reais
const distância = 600;  // distância total da viagem em km

const litros = distância / carro; // litros de gasolina necessários

const custoTotal = litros * precodeGasolina; // custo total do combustível

console.log(`Para uma viagem de ${distância} km, você precisará de ${litros.toFixed(2)} litros de gasolina.`);
console.log(`O custo total do combustível será de R$ ${custoTotal.toFixed(2)}.`);