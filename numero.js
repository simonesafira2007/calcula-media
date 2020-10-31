const input = require('readline-sync')

/* Elabore um programinha que leia um número, apresente a raiz quadrada e o
valor deste número elevado ao quadrado.
*/
   
let numero = input.question('digite um numero :')
raizQuadrada = numero * numero
valorRaizQuadrada = raizQuadrada * raizQuadrada


console.log(`A raiz quadrada do número informado pelo usuário foi : ${raizQuadrada}`)
console.log(`O quadrado de ${raizQuadrada}  foi : ${valorRaizQuadrada}`)


