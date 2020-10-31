const input = require('readline-sync')

/*
Escreva um algoritmo que leia um número e imprima-o, caso ele seja maior
que 20.
*/
let number = input.question("Entre com um numero")
if (number > 20) {
    console.log(number)
    
}else {
    console.log ("Número menor que 20")
}