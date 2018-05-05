/*
 * Todo objeto possui na sua criação a propriedade [[prototype]]
 * Através do [[prototype]] é poassível acessar os atributos dos
 * ancestrais daquele objeto
 * 
 * Object é uma função e toda função possui o atributo prototype
 * 
 * Todo objeto possui uma referência para o protótipo pai
*/

// Criando dois objetos
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Nem ferrari e nem volvo possuem o atrituto prototype. Logo undefined
console.log(ferrari.prototype)

// Para acessar o objeto pai usa-se: [nomeDoObjeto].__proto__
// Retorna um objeto vazio
console.log(ferrari.__proto__)

// Testando se o objeto ferrari.__proto__ é do tipo Object.prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

//
console.log(Object.prototype.__proto__ === null)

// criando uma função pai
// verificando qual de Object e de MeuObjeto 
// {} objeto vazio, MeuObjeto{} também vazio
// MeuObjeto possui um prototype diferente do prototype de Object,
// visto ele foi criado a partir de MeuObjeto(){}
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)