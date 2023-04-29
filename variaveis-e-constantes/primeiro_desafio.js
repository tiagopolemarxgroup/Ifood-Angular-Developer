
/* Faça um programa para calcular o valor uma viagem.

você terá 3 variáveis, Sendo elas:
1- Preço do combustível
2- Gasto médio de combustível do carro por KM
3- Distância em Km da viagem

Imprima no console o valor que será gasto para realizar está viagem.
*/

/*Primeiro descobrir quantos litros consumidos por viagem*/ 


let precoCombustivel = 5.79;
let gastoMedioPorKm = 10;
let distanciaViagemEmKm = 100;

const litrosConsumidos = distanciaViagemEmKm / gastoMedioPorKm;
const valorTotal = litrosConsumidos * precoCombustivel;

console.log("Litros gastos: ", litrosConsumidos);
console.log("Total: ", valorTotal.toFixed(2));
