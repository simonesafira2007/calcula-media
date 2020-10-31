const input = require('readline-sync')
/*
Escreva um algoritmo para determinar se um dado número N (recebido
através do teclado) é POSITIVO, NEGATIVO ou NULO (zero).
*/

const numero = input.question("Digite um numero ?")
if (numero > 0) {
    console.log("POSITIVO")
}else if (numero < 0){
    console.log("NEGATIVO")
} else {
    console.log("NULO")
}
