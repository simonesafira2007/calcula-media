const input = require('readline-sync')

/*
Faça um algoritmo que leia 3 números inteiros distintos e escreva o menor
deles.
*/
const num1 = input.question("Primeiro numero :")
const num2 = input.question("Primeiro numero :")
const num3 = input.question("Primeiro numero :")

if ((num1 > num2) & (num1 > num3)) {
    console.log(`O maior número é ${num1}`)
} else if ((num2 > num1) & (num2 > num3)){
    console.log(`O maior número é ${num2}`)
}else {
    console.log(`O maior número é ${num3}`)
}

