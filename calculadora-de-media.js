 const input = require('readline-sync')

 /*  
 
 Programa para calcular média:   
 - Recebe seis notas inseridas pelo usuário;
 - Soma todas as notas na constante total;
 - Efetua o cálculo da média;
 - Mostra a situação do aluno: Aprovado / Reprovado/ Recuperação  
 
 */

const input1 = input.question('Informe valor da primeira nota?')
const input2 = input.question('Informe valor da segunda nota?')
const input3 = input.question('Informe valor da terceira nota?')
const input4 = input.question('Informe valor da quarta nota?')
const input5 = input.question('Informe valor da quinta nota?')
const input6 = input.question('Informe valor da sexta nota?')


const total = parseFloat(input1) + parseFloat(input2) + parseFloat(input3) + parseFloat(input4) + parseFloat(input5) + parseFloat(input6)

console.log('Soma das notas: ' , total.toFixed(2))

media = total.toFixed(2)/6    

if (media >= 5 && media < 7){
console.log(' Sua média foi :',  media.toFixed(2),  '  --- Você está em Recuperação. Precisa estudar mais. ---')
} else if (media < 5 ){
console.log(' Sua média foi :' , media.toFixed(2),  '  --- Você foi Reprovado(a). Você não estudou o bastante. Sinto muito. ---')
} else {
console.log(' Sua média foi :' , media.toFixed(2),  ' --- Você foi Aprovado(a) por Média. Parabéns! ---')
}   
/*
Informe valor da primeira nota?7
Informe valor da segunda nota?7
Informe valor da terceira nota?7
Informe valor da quarta nota?7
Informe valor da quinta nota?7
Informe valor da sexta nota?7
Soma das notas:  42.00
 Sua média foi : 7.00  --- Você foi Aprovado(a) por Média. Parabéns! ---
*/



/*

 A Fuctura Express tem a capacidade de transportar 15 tonelada por viagem. 
 Sua frota possui 25 caminhões. O custo por cada Kg transportado é de 10,50. 
 Escreva um programa que receberá o peso de um lote em Kg* a ser transportado. 
 Seu algoritmo deve informar: 1 - Quantos caminhões serão necessários para transportar o lote. 
 2 - o número de viagens necessárias para transportar esse lote. 3 - custo de cada viagem.

*/

const entrada = input.question('Digite o peso do seu lote(kg)')

capacidadeDeTransportePorViagem = 15000
totalDaFrota = 25
custoPorQuiloTransportado = 10.50
capacidadeTotalCadaCaminhao = 15000
capacidadeTotalFuctura = capacidadeDeTransportePorViagem * totalDaFrota
caminhoesParaTransporteDoLote = entrada/capacidadeTotalCadaCaminhao
custoDaViagem = entrada * custoPorQuiloTransportado

console.log("Capacidade total da Fuctura é ", "R$", capacidadeTotalFuctura)
console.log("O número de caminhões para transporte do lote foi : ", caminhoesParaTransporteDoLote.toFixed(2) , "caminhões")
console.log("Custo da viagem é :", "R$", custoDaViagem.toFixed(2))

/*
Digite o peso do seu lote(kg)30000
Capacidade total da Fuctura é  R$ 375000
O número de caminhões para transporte do lote foi :  2.00 caminhões
Custo da viagem é : R$ 315000.00
*/