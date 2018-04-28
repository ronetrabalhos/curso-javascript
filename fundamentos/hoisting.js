/*
 * hoisting = içar, jogar para cima
 * em outra palavras, ele percerá que foi declarado uma variável, 
 * jogará para cima e no primeiro momento dirá que é indefinida.
 * Apos a atribuiçao de valor, ela imprimirá o valor 2.
 * 
 * Esse içamento ocorre tanto dentro quanto fora de uma função
 * 
 * ==========================
 * Isso não funciona para let
 * ==========================
*/

console.log('a no momento 1 = ', a);
var a = 2
console.log('a no momento 2 = ', a);

function teste(){
    console.log('b no momento 1 = ', b);
    var b = 2
    console.log('b no momento 2 = ', b);
}

teste()

/*
 * saída no console
 * 
 * a no momento 1 =  undefined
 * a no momento 2 =  2
 * b no momento 1 =  undefined
 * b no momento 2 =  2
*/


