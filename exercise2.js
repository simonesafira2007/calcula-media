const input = require("readline-sync");

/*
Escreva uma função que, dadas variáveis e seus valores, retorne o maior destes números.
  numero1 = 10
  numero2 = 12
  numero3 = 13
  numero4 = 20
*/

function lista() {
  numero1 = 10;
  numero2 = 12;
  numero3 = 13;
  numero4 = 20;
  if ((numero1 > numero2) & (numero1 > numero3) & (numero1 > numero4)) {
    console.log(numero1);
  } else if ((numero2 > numero1) & (numero2 > numero3) & (numero2 > numero4)) {
    console.log(numero2);
  } else if ((numero3 > numero1) & (numero3 > numero2) & (numero3 > numero4)) {
    console.log(numero3);
  } else {
    console.log(numero4);
  }
}
console.log(lista());
