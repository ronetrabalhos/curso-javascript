/*
 * A função arrow é sempre uma função anônima
 * Ela está sempre associada a uma const ou variável
*/

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))


console.log('- - - - - - - - - - - - - - - - - - - -')

// Funçao Arrow sem parâmetros necessita do () ou _
// Caso contrário dará erro de sintaxe
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())