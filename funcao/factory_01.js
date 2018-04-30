/*
 * Função Factory / Função Fábrica
 * 
 * Retorno é um novo objeto {}
*/

// Factory simples
function criarPessoa() {
    return {
        nome: 'Gustavo',
        sobrenome: 'Quites'
    }
}

console.log(criarPessoa())