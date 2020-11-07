const input = require('readline-sync')
/*
Escreva  um  programa  que  receba  o  código  correspondente  ao  cargo  de  um  funcionário  de  uma  escola  e  seu salário  atual e  mostre o  valor  do  novo  salário,  com aumento, conforme tabela abaixo: 

*/
console.log("")

const codigo = input.question("Insira o  codigo  correspondente  ao  seu cargo : ")

if (codigo == "1"){
    salario = 1000
    aumento = 1000 * 0.45
    salarioFinal = salario + aumento
    console.log(`Função : Secretário . Salário :R$ ${salario} . Obteve 45% de aumento. Logo, seu aumento foi de R$ ${aumento} . Seu Salario Final : R$  ${salarioFinal}`)

} else if (codigo == "2"){
    salario = 1500
    aumento = 1500 * 0.35
    salarioFinal = salario + aumento
    console.log(`Função : Professor . Salário :R$ ${salario} . Obteve 35% de aumento. Logo, seu aumento foi de R$ ${aumento} . Seu Salario Final : R$  ${salarioFinal}`)

} else if (codigo == "3"){
    salario = 1200
    aumento = 1200 * 0.25
    salarioFinal = salario + aumento
    console.log(`Função : Tesoureiro . Salário :R$ ${salario} . Obteve 25% de aumento. Logo, seu aumento foi de R$ ${aumento} . Seu Salario Final : R$  ${salarioFinal}`)

}else if (codigo == "4"){
    salario = 1600
    aumento = 1600 * 0.15
    salarioFinal = salario + aumento
    console.log(`Função : Coordenador . Salário :R$ ${salario} . Obteve 15% de aumento. Logo, seu aumento foi de R$ ${aumento} . Seu Salario Final : R$  ${salarioFinal}`)

} else if (codigo == "5"){
    salario = 2500
    
    console.log(`Função : Diretor . Salário :R$ ${salario} . Não tem aumento `)
} else {
    console.log ("Código inválido")
}