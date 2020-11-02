const input = require('readline-sync')

/*
Construa um algoritmo que leia um número inteiro de 1 a 7 e informe o dia
da semana correspondente, sendo domingo o dia de número 1. Se o número
não corresponder a um dia da semana, mostre uma mensagem de erro.
*/
const numero = input.question("Informe um numero inteiro de 1 a 7 :")
switch (numero) {

    case "1" :
        console.log("Segunda-feira")
        
        break;

    case "2" :
        console.log("Terça-feira")
        break;

    case "3" :
        console.log("Quarta-feira")
        break;

    case "4" :
        console.log("Quinta-feira")

        break;

    case "5":
        console.log("Sexta-feira")
        break;
            
    case  "6":
        console.log("Sábado")        
        break;

    case "7":
        console.log("Domingo")
        break;
                    

    default:
        console.log("Numero não corresponde a um dia da semana")
        
        break;
}