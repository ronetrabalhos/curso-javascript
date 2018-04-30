/*
 * Call e Apply
 * 
 * Outras duas maneiras diferentes de chamar uma função
 * A diferença entre Call e Apply está justamente na hora 
 * da passagem de parâmentros, na hora de invocar a função.
 * 
*/

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

// Objeto produto
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    /*
     * como já possuímos uma função chamada getPreco, ao declara-la
     * como abaixo, isso fará com que seja criado um atributo e 
     * associada a função getPreco declarada acima
    */
    getPreco
}

console.log(getPreco())         // NaN, pois nao tem preco no global
global.preco = 20
global.desc = 0.1
console.log(getPreco())         // Acessa o this do global, por isso tem dados
console.log(produto.getPreco()) // chamando a partir de um objeto

console.log('- - - - - - - - - - - - - - - - - - - -')

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))   // usando call
console.log(getPreco.apply(carro))  // usando apply

console.log('- - - - - - - - - - - - - - - - - - - -')

console.log(getPreco.call(carro, 0.17, '$'))        // objeto contexto, demais parametros
console.log(getPreco.apply(global, [0.17, '$']))    // objeto contexto, array com os demais parâmetros