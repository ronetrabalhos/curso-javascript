function criarProduto(nome = 'não informado', valor = '0.00'){
    return{
        nome: nome,
        valor: valor,
        vr_com_desconto: valor - 10.00   
    }
}

let produto01 = criarProduto()
console.log(produto01)

let produto02 = criarProduto('iPhone X - 64GB', 4999.99)
console.log(produto02)



console.log('- - - - - - - - - - - - - - - - - - - -')

// Versão do professor

function CriarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(CriarProduto('Notebook', 2199.49))
console.log(CriarProduto('iPad', 1199.49))