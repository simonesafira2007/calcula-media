const input = require("readline-sync");
/*
Escreva um algoritmo que leia dois valores numéricos inteiros e efetue a
adição; caso o resultado seja maior que 10, apresentá-lo.
*/

let valor1 = 9  
let valor2 = 65
let resultado = valor1+valor2
if (resultado > 10) {
  console.log(resultado);
} else {
    console.log("Valor menor que 10 não deverá ser exibido")
}
