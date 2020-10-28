const input = require("readline-sync");

/*  As maçãs custam R$ 1.30 cada se forem compradas menos de uma dúzia, e R$ 1.00 se forem  compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.   */


// Resoluução implementada sem função

const input1 = input.question("Informe quantas bananas comprou?");

if (input1 >= 12) {
  valor = input1 * 1.00
  console.log(valor);
} else {
  valor2 = input1 * 1.32.toFixed(2)
  console.log(valor2)
}


// Resolução com função

const entrada = input.question("Digite a quantidade de laranjas : ")

function frutas() {
    fruta = 0
    if (entrada >= 12){
        fruta = entrada * 1.00 
        return fruta
    }else{
        fruta = entrada * 2.00
       return fruta
    }

}
console.log(frutas())