

// Object.keys: retorna as chaves de um objeto
// Object.values: retorna os valores de um determinado objeto
// Object.entries: retorna um array de arrays com todos os valores
// Object.defineProperty: definir uma propriedade de um objeto 
// Object.assign: concatenação de objetos, gerando um novo objeto. Caso ocorra de um algum
//                objeto ter o mesmo atributo de outro já inserido, o valor dessa propriedade
//                será atualizado.

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   // será enumerado na lista de chaves do array?
    writable: false,    // pode ser modificado?
    value: '01/01/2019' // valor
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)