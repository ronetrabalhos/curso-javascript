/*
 * Operação com operadores relacionais sempre será true ou false
 * 
 * == igual
 * === estritamente igual (leva em conideração o tipo)
 * != diferente
 * !== estritamente diferente (leva em conideração o tipo)
 * 
 * NOTA:
 * 
 * Via de regra, utilize === e !==
*/

console.log('01)', '1' == 1)    // compara valor e desconidera o tipo
console.log('02)', '1' === 1)   // compara valor e considera o tipo
console.log('03)', '3' != 3)    // compara valor e desconidera o tipo
console.log('04)', '3' !== 3)   // compara valor e conidera o tipo

console.log('- - - - - - - - - - - - - - - - - - - -')

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

console.log('- - - - - - - - - - - - - - - - - - - -')

const d1 = new Date(0)      // O zero é a data de referencia 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)   // compara a posição de memória, por isso false
console.log('10)', d1 == d2)    // compara a posição de memória, por isso false
console.log('11)', d1.getTime() === d2.getTime())  // compara o Number

console.log('- - - - - - - - - - - - - - - - - - - -')

console.log('12)', undefined == null)
console.log('13)', undefined === null)