const input = require("readline-sync");

/*
Escreva um algoritmo que leia um número e imprima a raiz quadrada do
número caso ele seja positivo ou igual a zero; e o quadrado do número caso
ele seja negativo.
*/

const numero = input.question("Informe um numero :")

if (numero >= "0"){
    raizQuadradaDoNumero = (numero * numero)/ numero
    console.log(raizQuadradaDoNumero)
} else {
    quuadradoDoNumero = numero * numero
    console.log(quuadradoDoNumero)
}
