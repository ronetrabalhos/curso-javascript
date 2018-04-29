/*
 * Função em JS é First-Class Object (Citizens)
 * Higher-order function
*/

// criar de forma literal
function fun1() { }



// Armazenar em uma variável
// observe que a funcao é anônima
// invoca-se usando o nome da constante com ()
const fun2 = function () { }



// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))



console.log('- - - - - - - - - - - - - - - - - - - -')

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar()) // os () invocam a função



console.log('- - - - - - - - - - - - - - - - - - - -')

// Passar função como parametro para outra função
function run(fun) {
    // recebe uma função com parâmetro
    // executo colocando os (), por isso, fun()
    fun()
}

run(function () { console.log('Executando...') })



console.log('- - - - - - - - - - - - - - - - - - - -')

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

// chama a funcão soma com os parâmetros (2,3)
// o retorno será a função que espera o parâmetro c
// que por sua vez será o valor 4
soma(2, 3)(4)

console.log('- - - - - - - - - - - - - - - - - - - -')

const cincoMais = soma(2, 3)
cincoMais(10)