// A aula trata da notação literal da criaç


// objeto vazio
// Um objeto em javascript é uma coleção de chave -> valor (id = valor)
// Dentro de um objeto eu posso ter outro objeto
const prod01 = {}

prod01.nome = 'celular ultra mega'
prod01.valor = 5000.00
prod01['chave com espaco'] = 0.40 // em JS é possível criar chaves com espaço, mas não é recomendado
console.log(prod01)

// criando objeto da forma literal (recomendado)
const prod02 = {
    nome: 'camisa polo',
    preco: 79.90
}
console.log(prod02)

// criando objeto da forma literal, com outros objetos internos
const prod03 = {
    nome: 'iPhone',
    preco: 6999.99,

    detalhe01: {
        det_prop01: 'prop01',

        detalhe02: {
            det_prop02: 'prop02'
        }
    }
}
console.log(prod03)

// ================================
// Transformando o prod02 em um arquivo json
// json = JavaScript Object Notation
// json é um formato textual de chave e valor

//'{"nome" : "camisa polo", "preco" : 79.90}'




// ================================
// NOTAS
// ================================

/*
 * Um objeto JS não é um json
 * json = JavaScript Object Notation
 */