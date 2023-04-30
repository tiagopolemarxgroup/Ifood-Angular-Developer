/*Faça um programa para calcular o valor uma viagem.

você terá 5 variáveis, Sendo elas:
1- Preço do etanol
2- Preço da gasolina
3- o tipo de combustivel que está no seu veículo
4- Gasto médio de combustível do carro por KM
5- Distância em Km da viagem

Imprima no console o valor que será gasto para realizar está viagem.

*/

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let tipoConbustivel = "etanol";
let gastoMedioPorKm = 10;
let distanciaViagemEmKm = 100;
let valorTotal;

const litrosConsumidos = distanciaViagemEmKm / gastoMedioPorKm;

if (tipoConbustivel === "etanol") {
  valorTotal = litrosConsumidos * precoEtanol;
} else if (tipoConbustivel === "gasolina") {
  valorTotal = litrosConsumidos * precoGasolina;
}

console.log("Tipo de combustivel " + tipoConbustivel);
console.log("Gasto medio por km: ", gastoMedioPorKm);
console.log("Distancia da viagem", distanciaViagemEmKm);
console.log("Valor total: " + valorTotal);
