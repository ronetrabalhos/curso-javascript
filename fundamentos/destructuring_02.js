/*
 * Array de uma posição
 * Criando um array a que recebera o valor de 10 na primeira posição, 
 * usando o operador destructuring
 * 
 * Um array literal seria:
 * const a = [10];
*/

const [a] = [10]
console.log(a)


const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)


//const [ ignorou, [outro array ignorando a posicao 0]] = [[, 8, 8], [9, 6, 8]]

const [, [, nota]] = [ [, 8, 8], [9, 6, 8] ]
console.log(nota)