const input = require('readline-sync')

/*  

Calcular o consumo médio de um automóvel (medido em Km/l), dado que são
conhecidos a distância total percorrida e o volume de combustível consumido
para percorrê-la (medido em litros).

*/

const volumeDeCombustivel = input.question("informe o volume de combustivel consumido ?")
const distanciaTotalPercorrida = input.question("informe a distancia Total Percorrida?")
const consumoMedioDoAautomOvel = distanciaTotalPercorrida / volumeDeCombustivel
console.log("O consumo médio do automóvel foi :", consumoMedioDoAautomOvel)


