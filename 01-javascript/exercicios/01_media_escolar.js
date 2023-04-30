let nota1 = 0.0;
let nota2 = 4.0;
let nota3 = 6.8;
let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Reprovado:" + media.toFixed(2));
} else if (media >= 5 && media <= 7) {
  console.log("Recuperação: " + media.toFixed(2));
} else {
  console.log("Passou de semestre: " + media.toFixed(2));
}
