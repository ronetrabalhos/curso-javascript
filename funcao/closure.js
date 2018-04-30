// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {

    console.log('entrei em fora()')
    const x = 'Local'

    function dentro() {
        console.log('passei dentro()')
        return x
    }

    console.log('passei fora()')

    // o retorno é a função dentro
    return dentro
}

console.log('Antes da chamada da função o valor de x é: ', x )
console.log('- - - - - - - - - - - - - - - - - - - -')
console.log('Invocado fora(). O retorno é a função dentro()')
const minhaFuncao = fora()
console.log('- - - - - - - - - - - - - - - - - - - -')
console.log('Depois da chamada da função o valor de x é: ', x)
console.log('- - - - - - - - - - - - - - - - - - - -')
console.log('Invocando minhaFuncao que tem o valor de dentro()')
console.log(minhaFuncao())