const input = require("readline-sync");

/*
 Ler uma   data  no  formato:  dia  (um  inteiro  entre  1 -31),  dia  
 da  semana  (um inteiro entre 1-7), mês(um inteiro entre 1-12) e um ano
  (inteiro entre 0-6553) e imprimir na tela no formato 00/00/0000
*/

const dataDoDia = input.question("Entre com  data do dia :");

if (dataDoDia < "1" || dataDoDia > "31") {
  console.log("Data inválida. Data válida de 1 a 31");
}

const diaDaSemana = input.question("Entre com o dia da semana :");
if (diaDaSemana < "1" || diaDaSemana > "7") {
  console.log("Dia inválido. Dia válido de 1 a 7");
} else if (diaDaSemana == "1") {
  console.log("segunda-feira");
} else if (diaDaSemana == "2") {
  console.log("terça-feira");
} else if (diaDaSemana == "3") {
  console.log("quarta-feira");
} else if (diaDaSemana == "4") {
  console.log("quinta-feira");
} else if (diaDaSemana == "5") {
  console.log("sexta-feira");
} else if (diaDaSemana == "6") {
  console.log("Sábado");
} else if (diaDaSemana == "7") {
  console.log("Domingo");
}

const mes = input.question("Entre com o mes :");

if (mes == "1") {
  console.log("Janeiro");
} else if (mes == "2") {
  console.log("Fevereiro");
} else if (mes == "3") {
  console.log("Março");
} else if (mes == "4") {
  console.log("Abril");
} else if (mes == "5") {
  console.log("Maio");
} else if (mes == "6") {
  console.log("Junho");
} else if (mes == "7") {
  mes = "Julho";
} else if (mes == "8") {
  console.log("Agosto");
} else if (mes == "9") {
  console.log("Setembro");
} else if (mes == "10") {
  console.log("Outubro");
} else if (mes == "11") {
  console.log("Novembro");
} else if (mes == "12") {
  console.log("Dezembro");
} else {
  console.log("Mês inválido. Escolha de 1 a 12");
}

const ano = input.question("Entre com o ano (4 digitos) :");
console.log(` ${dataDoDia} / ${mes} / ${ano}`);

/*
Entre com  data do dia :20
Entre com o dia da semana :3
quarta-feira
Entre com o mes :5
Maio
Entre com o ano (4 digitos) :2020
 20 / 5 / 2020

*/