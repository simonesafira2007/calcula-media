const input = require('readline-sync')
/*
Uma confeitaria vende três tipos de doces. Sabendo-se que o doce do tipo 1
é vendido por R$ 2,00, o do tipo 2 por R$ 2,50 e o do tipo 3 por R$ 3,00.
Faça um algoritmo que, para cada tipo de doce, mostre a quantidade
vendida e o total arrecadado.

*/

// Solução 1

const tipo1 = 2.00
const qtd1 = input.question("Informe a quantidade de doce do tipo 1 desejada :")
valorDoceTipoUm = qtd1 * tipo1
console.log(`A quantidade de doces tipo1 vendida foi ${qtd1} e o valor custa : R$ ${valorDoceTipoUm}`)

const tipo2 = 2.50
const qtd2 = input.question("Informe a quantidade de doce do tipo 2 desejada :")
valorDoceTipoDois = qtd2 * tipo2
console.log(`A quantidade de doces tipo2 vendida foi ${qtd2} e o valor custa : R$ ${valorDoceTipoDois}`)

const tipo3 = 3.00
const qtd3 = input.question("Informe a quantidade de doce do tipo 3 desejada :")
valorDoceTipoTres = qtd3 * tipo3
console.log(`A quantidade de doces tipo3 vendida foi ${qtd3} e o valor custa : R$ ${valorDoceTipoTres}`)

// Solução 2


console.log("Escolha o tipo de doce: 1- Tipo1, 2- Tipo2, 3- Tipo3:")
const tipoDoce = input.question("Informe o tipo de doce desejado :")
if ((tipoDoce != 1) & (tipoDoce != 2) & (tipoDoce != 3)) {
    console.log("Opção inválida!")

}else if ( tipoDoce == 1 ) {
const tipo1 = 2.00
const qtd1 = input.question("Informe a quantidade de doce do tipo 1 desejada :")
valorDoceTipoUm = qtd1 * tipo1
console.log(`A quantidade de doces tipo1 vendida foi ${qtd1} e o valor custa : R$ ${valorDoceTipoUm}`)

} else if( tipoDoce == 2 ) {
    const tipo2 = 2.50
    const qtd2 = input.question("Informe a quantidade de doce do tipo 2 desejada :")
    valorDoceTipoDois = qtd2 * tipo2
    console.log(`A quantidade de doces tipo2 vendida foi ${qtd2} e o valor custa : R$ ${valorDoceTipoDois}`) 
} else if ( tipoDoce == 3 ) {
    const tipo3 = 3.00
    const qtd3 = input.question("Informe a quantidade de doce do tipo 3 desejada :")
    valorDoceTipoTres = qtd3 * tipo3
    console.log(`A quantidade de doces tipo3 vendida foi ${qtd3} e o valor custa : R$ ${valorDoceTipoTres}`)  
}
