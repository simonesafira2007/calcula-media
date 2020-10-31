const input = require("readline-sync");

/*
Escreva um algoritmo que determine (imprima) se um dado número N
inteiro é PAR ou ÍMPAR.
*/
const number = input.question("Entre com um numero:");

if (number % 2 == 0) { // mod 2  - usa-se % em Javascript
  console.log("PAR");
} else {
  console.log("ÍMPAR");
}
