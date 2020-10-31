const input = require("readline-sync");

/*
Escreva um algoritmo que leia um número e imprima a raiz quadrada do
número caso ele seja positivo ou igual a zero  e retorne uma mensagem de número inválido caso
o número inserido seja negativo.
*/

const numero = input.question("Informe um numero :")

if (numero >= 0 ){
    raizQuadradaDoNumero = numero * numero
    console.log(raizQuadradaDoNumero)
} else {
    console.log("Número inválido")   
}

