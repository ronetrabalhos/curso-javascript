/*
 * a forma pre-fixada (--a) precede a forma pos-fixada (a--)
*/


let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

// O resultado dessa operacao sera verdadeiro, porque a
// operação num2-- será executada somente depois da 
// comparação
console.log(++num1 === num2--)

// realizado a operaçao === teremos a resposta esperada
console.log(num1 === num2)