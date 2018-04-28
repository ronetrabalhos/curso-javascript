/*
 * Operador Destructuring
 * 
 * Introduzido na versão ES2015
 * Tira da estrutura (objeto) alguma coisa
 * Forma simplificada de tirar os objetos de dentro de uma estrutura
 * 
 * ---------------------------
 * Modo Padrão
 * ---------------------------
 * pessoa.nome 
 * pessoa.idade
 * [ou]
 * const nome = pessoa.nome
 * let idade  = pessoa.idade
 * 
 * ---------------------------
 * Usando Destrucuring
 * ---------------------------
 * const {nome, idade } = pessoa
 * 
 * No code acima lê-se: tire os atributos nome e idade do objeto pessoa.
 * O = não é atribuição
 * Em outras palavras: tira-se mais de um atributo em apenas uma linha
*/


const pessoa = {
    nome: 'Gustavo Quites',
    idade: 35,
    endereco: {
        logradouro: 'Av ABC',
        numero: 24
   }
}

const {nome, idade } = pessoa
console.log(nome, ' - ', idade)

/*
 * Tirando os valores e criando variáveis n para nome e i para idade
*/

const {nome: n, idade: i } = pessoa
console.log(n, ' - ', i)

/*
 * E se chamar um atributo que não existe? 
 * Retorna undefined
 * 
 * Posso inserir um retorno padrão, caso não exista um dado ou atributo?
 * Sim. Utiliza = na frente do atributo
*/

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, ' - ', bemHumorada)

/*
 * Acessando endereço
 * Note que temos atributos aninhados, logo será criado objeto apenas
 * dos atributos mais internos (logradouro, numero e cep - que não existe)
 * 
 * Nota: foi necessário adicionar a variável auxiliar n1 para o atributo nome,
 * pois nome já havia sido utilizada no exemplo acima.
*/

const {nome: n1, endereco: {logradouro, numero, cep = "00000-000"} } = pessoa
console.log(n1, ' - ', logradouro, ' - ', numero, ' - ', cep)

