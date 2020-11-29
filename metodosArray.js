// Aplicação de alguns métodos no array
console.log("  **** MÉTODOS DO ARRAY ***  ")
console.log(" ___________________________ ")

console.log("Imprimindo o array de meses do ano")

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho" ]
console.log(meses)

console.log("  *************************  ")

console.log("adicionando um elemento (string = Agosto) ao final do array usando o push")
meses.push("Agosto")

console.log(meses)

console.log("  *************************  ")

console.log("removendo o novo elemento (string = Agosto) do final do array usando o pop")

meses.pop("Agosto")

console.log(meses)

const numeros = [20 , 57 , 81 , 67, 2, 10]

console.log("Imprindo o array de meses do ano")

console.log(numeros)

console.log("adiciona um ou mais  elementos (8, 15, 92) no começo do array usando o unshift")
meses.pop("Agosto")

numeros.unshift(8, 15, 92)

console.log(numeros)

console.log("  *************************  ")

/*
  **** MÉTODOS DO ARRAY ***  
 ___________________________
Imprimindo o array de meses do ano
[ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho' ]
  *************************
adicionando um elemento (string = Agosto) ao final do array usando o push
[ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto' ]
  *************************
removendo o novo elemento (string = Agosto) do final do array usando o pop
[ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho' ]
Imprindo o array de meses do ano
[ 20, 57, 81, 67, 2, 10 ]
adiciona um ou mais  elementos (8, 15, 92) no começo do array usando o unshift
[
   8, 15, 92, 20, 57,
  81, 67,  2, 10
]
  *************************

*/
