const input = require('readline-sync')

// Função que calcula o quadrado de um número, ou seja, o produto de um número por si mesmo a partir da entrada do usuário

num = input.question("Digite um numero positivo :")

function quadrado () {
    return num * num
}

console.log(quadrado())