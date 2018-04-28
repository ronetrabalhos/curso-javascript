/*
 * Foi cosntruido utilizando uma função Arrow
 * expressao relacional: nota => nota >= 7
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log('Nota 7.1: ', resultado(7.1))
console.log('Nota 6.7: ',resultado(6.7))