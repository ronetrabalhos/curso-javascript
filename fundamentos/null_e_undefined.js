console.log(`
============================== 
Introducao aos conceitos 
==============================
`)
const a = {name: 'teste'}
console.log(a)

// atribuindo o valor de a em b
// na verdade está atribuindo o mesmo endereço de a em b, e não o seu valor propriamente
const b = a
console.log(b)

// logo a e b apontam para o mesmo endereço de memória
// se mudarmos o nome em b, a terá o mesmo resultado de b

b.name = 'ola mundo'
console.log(a, b)

// isso é o que chamamos de atribuição por referência

// ===========

// Quando trabalhamos com valores primitivos, haverá uma atribuição por valor
// Ocorre a cópia literal do valor
let c = 3   // 3 é um valor primitivo da linguagem
let d = c
d++
console.log(c, d, c)

// ===========================+
// Atividade da aula
// ===========================+

console.log(`
============================== 
Exercícios da aula 
==============================
`)

let valor // variável não inicializada
console.log(valor);
// console.log(valor2);  //valor2 is not defined (nem foi declarado no código)

valor = null  // ausência de valor, não aponta para mais nenhum endereço de memória
console.log(valor);

//console.log(valor.toString()); // (Cannot read property 'toString' of null) você não pode ler um valor nulo

const produto = {}
console.log(produto);
console.log(produto.preco)  // undefined

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // nao usar isso. use: delete produto.preco
console.log(!!produto.preco);
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);



