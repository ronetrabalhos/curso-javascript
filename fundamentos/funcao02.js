// armazendando uma função em uma variável ou constante
// no exemplo temos uma função anônima, ou seja, não nominada

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)


// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(1, 6))


// retorno implícito
// necessário que a expressão tenha apenas uma linha
const subtracao = (a, b) => a - b

console.log(subtracao(10,8))

// retorno implícito com apenas um atributo
const nome = a => a
console.log('O nome é: ' + nome('Rone'));
