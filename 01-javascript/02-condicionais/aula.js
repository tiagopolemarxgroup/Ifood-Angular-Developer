const numero = 0;
const numeroPar = (numero % 2) === 0;
const resto = (numero % 5)  === 0;
const  divisivelPor5 = resto;

if(numero === 0){
   console.log("Numero inválido") 
}else if(divisivelPor5){
    console.log("Sim")
    console.log(divisivelPor5)
    console.log((numero % 5))
}else{
    console.log("Não")
    console.log(divisivelPor5)
    console.log((numero % 5))
   
}

//console.log(numeroPar)

if(numeroPar){
  //  console.log("Par")
}
if(!numeroPar){
 //   console.log("Impar")
}
else{
  //  console.log("Não é par")
}
