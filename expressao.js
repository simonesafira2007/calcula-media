// Ler 2 números inteiros calcular o resultado da expressão.
const input = require('readline-sync')

let B = input.question(" Informe o primeiro numero")
let C = input.question(" Informe o segundo numero")

A = (B+C)/(B*C*C)

console.log("O resultado da expressão foi ; ", A)
