/*
 * 
*/

// coleção dinâmica de pares chave/valor
const produto = new Object  // cria objeto a partir do operador new
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

console.log('- - - - - - - - - - - - - - - - - - - -')

delete produto.preco
delete produto['marca do produto']

console.log(produto)

console.log('- - - - - - - - - - - - - - - - - - - -')

const carro = {
    modelo: 'A4',
    valor: 89000,

    // objeto dentro do objeto carro
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // array de objetos dentro do objeto carro
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    // função dentro do objeto carro
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

console.log('- - - - - - - - - - - - - - - - - - - -')
//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

console.log('- - - - - - - - - - - - - - - - - - - -')
console.log(carro.condutores)

console.log('- - - - - - - - - - - - - - - - - - - -')
console.log(carro.condutores.length)