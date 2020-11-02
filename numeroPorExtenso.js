const input = require("readline-sync");

/*
Construa um algoritmo que solicite ao usuário para digitar um número
e mostre-o por extenso. Este número deve variar entre 1 e 10. Se o
usuário introduzir um número que não está neste intervalo, mostre:
"Número inválido".
*/
const numero = input.question("Favor digitar um numero de 1 a 10 : ");

switch (numero) {
  case "1":
    console.log("UM");
    break;
  case "2":
    console.log("DOIS");
    break;
  case "3":
    console.log("TRÊS");
    break;
  case "4":
    console.log("QUATRO");
    break;
  case "5":
    console.log("CINCO");
    break;
  case "6":
    console.log("SEIS");
    break;
  case "7":
    console.log("SETE");
    break;

  case "8":
    console.log("OITO");
    break;
  case "9":
    console.log("NOVE");
    break;
  case "10":
    console.log("DEZ");
    break;

  default:
    console.log("Insira um número de 1 a 10");
    break;
}
