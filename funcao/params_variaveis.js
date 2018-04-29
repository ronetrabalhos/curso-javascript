/*
 * Em javascript é possível passar parâmetros para funcoes que não
 * exigem parâmetros e o mais estranho é que é possível recuperar
 * esses valores através da propriedade arguments
 * 
 * arguments é um array
 * 
 * ============================================
 * TODA FUNÇÃO TEM O ARRAY ARGUMENTS DISPONÍVEL
 * ============================================
 * 
*/

function soma() {
    let soma = 0
    // arguments é um array interno da funcao 
    //que armazena todos os parâmetros repassados
    for (i in arguments) { 
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log('- - - - - - - - - - - - - - - - - - - -')
console.log(soma(1))
console.log('- - - - - - - - - - - - - - - - - - - -')
console.log(soma(1.1, 2.2, 3.3))
console.log('- - - - - - - - - - - - - - - - - - - -')
console.log(soma(1.1, 2.2, " Teste"))
console.log('- - - - - - - - - - - - - - - - - - - -')
console.log(soma('a', 'b', 'c'))