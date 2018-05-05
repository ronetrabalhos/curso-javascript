// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa!

/*
 * criando o objeto avo
 * criando o objeto pai, que tem referência no objeto avo, e isso é
 * feito através da propriedade __proto__: avo
 * 
 * então temos:
 * o filho tem como protótipo o pai
 * o pai tem como protótipo o avó
 * e o avó tem como protótipo o Objetc.prototype
*/

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(
    filho.attr0,    // atributo do Object.prototype
    filho.attr1,    // atributo do avô
    filho.attr2,    // atributo do pai 
    filho.attr3     // atributo do próprio objeto (filho)
)

console.log('- - - - - - - - - - - - - - - - - - - -')
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing (sombreamento)
}

const volvo = {
    modelo: 'V40',
    // sombreado a função status do objeto carro
    // usamos o super para referenciar o protótipo atual, 
    // da mesma mareira que fazemos com super
    status() {
        return `Modelo ${this.modelo}: ${super.status()}`
    }
}

// estabelecendo a relação de protótipo
// ferrari e volvo tem carro como seu protótipo
// Object.setPrototypeOf(OBJETO, PROTÓTIPO ACIMA)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log('- - - - - - - - - - - - - - - - - - - -')
console.log(volvo)

console.log('- - - - - - - - - - - - - - - - - - - -')
volvo.acelerarMais(100)
console.log(volvo.status())

console.log('- - - - - - - - - - - - - - - - - - - -')
ferrari.acelerarMais(300)
console.log(ferrari.status())