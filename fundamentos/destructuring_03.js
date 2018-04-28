/*
 * Usando o Operador Destructuring (OD) aplicado em uma função
 * A função recebe como parâmetro um objeto, pois a construção
 * da função rand foi construida com o operador destructuring
 * 
 * Modelo clássico de função
 * function rand(min, max){ }
 * 
 * Modelo com OD
 * function rand({min = 0, max = 1000}){ }
 * 
*/

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 40, max: 50}

console.log('Número retornado [obj como constante]         : ', rand(obj))
console.log('Número retornado [obj no corpo da chamda]     : ', rand({min: 10, max: 30}))
console.log('Número retornado [obj no corpo e somente min] : ', rand({min: 990}))
console.log('Número retornado [obj no corpo sem valores]   : ', rand({}))