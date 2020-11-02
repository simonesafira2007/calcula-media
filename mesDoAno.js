const input = require("readline-sync");

/*
Construa um algoritmo que solicite um mês do ano (01 a 12) e, de acordo
com as condições abaixo, dizer: 01 (Férias), 02 a 06 (1º semestre letivo),
07 (Recesso), 08 a 11 (2º semestre letivo), 12 (Férias).
*/

const mesDoAno = input.question(
  "Digite um numero correspondente ao mes do ano: de 1 a 12) :"
);

switch (mesDoAno) {
  case "1":
    console.log("Férias");

    break;

  case "2":
    console.log("1º semestre letivo ");

    break;

  case "3":
    console.log(" 1º semestre letivo ");

    break;
  case "4":
    console.log(" 1º semestre letivo ");

    break;
  case "5":
    console.log(" 1º semestre letivo ");

    break;
  case "6":
    console.log(" 1º semestre letivo ");

    break;
  case "7":
    console.log(" Recesso");

    break;
  case "8":
    console.log(" 2º semestre letivo ");

    break;
  case "9":
    console.log(" 2º semestre letivo ");

    break;

  case "10":
    console.log(" 2º semestre letivo ");

    break;
  case "11":
    console.log(" 2º semestre letivo ");

    break;

  case "12":
    console.log(" Férias ");

    break;

  default:
    console.log(" Insira um número de 1 a 12 ");
    break;
}
