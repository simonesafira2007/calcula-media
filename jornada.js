const input = require('readline-sync')

/*
 A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar
 mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
 Escreva um algoritmo que leia o número de horas trabalhadas em um mês,  o valor da hora trabalhada e escreva o salário
 total do funcionário, que deverá ser acrescido  das horas extras, caso tenham sido trabalhadas 
 (considere que o mês possua 4 semanas exatas).
*/

const qtdHoraExtraTrabalhada = input.question(" Informe a quantidade de horas extra trabalhadas : ")

const valorDaHoraTrabalhada = input.question(" Informe valor da hora trabalhada :")

const qtdHoraSemanalTrabalhada = 40
const horaExtra = valorDaHoraTrabalhada * 0.5
const salario =  qtdHoraSemanalTrabalhada * valorDaHoraTrabalhada
const salarioTotal = salario + (qtdHoraExtraTrabalhada * horaExtra )

console.log(` O valor da hora extra foi : ${horaExtra}`)
console.log(` O valor do salario total é ${salarioTotal} `)

/*

Informe o numero de horas extra trabalhadas :1
 Informe valor da hora trabalhada :70
 O valor da hora extra foi : 35
 O valor do salario total é 2835
 
*/












