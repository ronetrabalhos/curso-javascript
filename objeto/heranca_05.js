/*
 * String, Array e Object são functions
 * Logo, todas elas tem a propriedade .prototype
*/

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


/*
 * A função reverse não existe por padrão na api de String,
 * mas utilizando da herança é possível adicionar  
 * uma nova função (ou propriedade) a Function String (Protótipo).
 * 
 * Para isso:
 * 1 - divide-se a string em caracteres com split('')
 * 2 - inverte os caracteres através da propriedade 
 *     .reverse presente no array gerado pelo split()
 * 3 - junta os carcteres na string através do método 
 *     join('')
*/

console.log('- - - - - - - - - - - - - - - - - - - -')
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

// Como s string é um literal de String, é possível 
// chamar a função com ponto(.)
console.log('Escola Cod3r'.reverse())


console.log('- - - - - - - - - - - - - - - - - - - -')
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())


console.log('- - - - - - - - - - - - - - - - - - - -')
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())

/*
 * ATENÇÃO
 * Não subtitua funções e métodos já existente na api
*/
