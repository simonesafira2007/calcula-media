
const input = require('readline-sync')

/* Programa para calcular média:
 - Recebe seis notas inseridas pelo usuário;
 - Soma todas as notas na constante total;
 - Efetua o cálculo da média;
 - Mostra a situação do aluno: Aprovado / Reprovado/ Recuperação */

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

    

