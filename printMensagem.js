const input = require("readline-sync");

/*
Faça um algoritmo que leia os valores A, B e C. Mostre uma mensagem que
informe se a soma de A com B é menor, maior ou igual a C.
*/
let a = 4; // Para testar as condições foi necessário modicar os valores das variáveis a, b, c antes de rodar o código
let b = 5; 
let c = 9; 

let soma = a + b;
if (soma > c) {
  console.log(`A soma de A mais B é maior que C`);
} else if (soma < c) {
  console.log(`A soma de A mais B é menor que C`);
} else {
  console.log(`A soma de A mais B é igual a C`);
}
