// pessoa -> 123 -> {...}
// lê-se: pessoa aponta para o local de memoria 123 e nele tem o obj em sim
// Nessa abordagem, o objeto contido dentro da constante pessoa é quem sofre
// a modificação e não a variavel pessoa propriamente dita. 
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

console.log('- - - - - - - - - - - - - - - - - - - -')
/*
 * freeze (congelar)
 * 
 * método de Object que congela e não deixa mais alterar
 * o valor do objeto. O objeto se manterá inalterado,
 * mesmo que eu tente alterar o valor de nome de forma
 * correta. Ah! A tentativa de alteração não gera erro
 * 
 * Em outras palavras, além do endereço de memória ser
 * constante (variavel const), o freeze deixa constante
 * o objeto que é apontado pela variável
*/

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


console.log('- - - - - - - - - - - - - - - - - - - -')
const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)