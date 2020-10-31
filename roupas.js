const input =require('readline-sync')

/*
Uma loja de roupas em geral está vendendo seus produtos em 5 (cinco)
prestações sem juros ou oferece um desconto de 20% sobre as compras à
vista. Faça um algoritmo que receba o valor da compra, mostre o valor das
prestações e o valor à vista.
*/

const valorDaCompra = input.question("Informe o valor total das compras :")
desconto = valorDaCompra * 0.2
pagamentoAvista = valorDaCompra - desconto
prestacao = valorDaCompra/ 5

console.log(`O valor das compras a vista foi : ${pagamentoAvista} `)
console.log(`O valor das prestação é : R$ ${prestacao}  em 5 vezes`)

