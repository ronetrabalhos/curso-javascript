/*
 * Evite variável global em javascript
 * A saída desse código será o mesmo, visto que não existe escopo de bloco
 */

var numero = 1

{
    var numero = 2
    console.log('dentro do bloco de código: ', numero)    
}

console.log('fora do bloco de código: ', numero)    
