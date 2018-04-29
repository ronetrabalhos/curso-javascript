/*
 * o for in dará o índice de cada um dos elementos e não o elemento em si
 * para array não é interessante, pois existem opções melhores
 * para objeto sim
*/


const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// para cada nota ele dará o indice i
for (let i in notas) {
    console.log(i, notas[i])
}

console.log('- - - - - - - - - - - - - - - - - - - -')

const pessoa1 = {
    nome: 'Gustavo',
    sobrenome: 'Quites',
    idade: 35,
    peso: 89
}

const pessoa = {
    nome: 'Gustavo Quites',
    idade: 35,
    endereco: {
        logradouro: 'Av ABC',
        numero: 24
   }
}

// NOTA IMPORTANTE
// para objeto é interessante utilizar for in
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}