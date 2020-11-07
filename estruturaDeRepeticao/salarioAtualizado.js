
/* Escreva um programa que leia o valor do salário de um funcionário e aplique um
aumento de 30% se o salário for igual ou inferior a R$500,00. 
*/
const salario = 500
// caso queira executar o else, altere o valor da const salario para mais de 500

   
if (salario <= 500){
    aumentoSalarial= salario * 0.3
    salarioAtualizado = salario + aumentoSalarial
    console.log(" O salário atualizado foi : R$ ", salarioAtualizado)
}else {
    console.log("O valor do salario foi :", salario)
}