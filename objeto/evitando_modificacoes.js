/*
 * Object.preventExtensions (previne extender atributos)
 * 
 * não é permitido adicionar novos atributos ao objeto
 * é possível editar e excluir
*/

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// 
/*
 * Object.seal (selado)
 * 
 * nao consegue adicionar ou excluir,
 * mas consegue modificar os atributos existentes
*/
console.log('- - - - - - - - - - - - - - - - - - - -')
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = objeto selado + valores constantes