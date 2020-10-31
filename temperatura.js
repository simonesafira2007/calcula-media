const input = require('readline-sync')

/*   
Escreva um algoritmo em para ler uma temperatura em graus Fahrenheit,
calcule e escreva o valor correspondente em graus Celsius (baseado na
fórmula abaixo):
C:=((F-32)*5)/9
*/  

const tempertauraEmGrausFahrenheit = input.question(" Informe a temperatura em graus Fahrenheit ")

tempertauraEmGrausCelsius = ((tempertauraEmGrausFahrenheit-32)*5)/9

console.log(`A temperatura em graus Celsiue foi : ${tempertauraEmGrausCelsius}`)