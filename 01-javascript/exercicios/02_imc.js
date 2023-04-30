let peso = 50;
let altura = 1.74;
const imc = peso / (altura * altura);

if(imc < 18.5){
    console.log("Abaixo do peso " + imc.toFixed(2))
}else if(imc > 18.5 && imc < 25){
    console.log("Peso normal " + imc.toFixed(2))
}else if(imc >= 25 && imc < 30){
    console.log("Acima do peso " + imc.toFixed(2))
}else if(imc >= 30 && imc < 40){
    console.log("Obeso " + imc.toFixed(2))
}else {
    console.log("Obesidade Grave " + imc.toFixed(2))
}
