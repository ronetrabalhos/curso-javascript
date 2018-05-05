/*
 * JSON é formato de dados, não é um arquivo executável. 
 * Ele é um arquivo textual
 * 
 * Serve para compartilhamento de dados entre sistemas
 * 
 * =============================
 * Ferramentas interessantes
 * =============================
 * Pesquise por no google por: json Validator
 * Ex.: jsonlint.com
*/

// Observe que na conversão do objeto abaixo, a função soma()
// será excluída da saída do json
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))


// Transfornando um json em objeto
console.log('- - - - - - - - - - - - - - - - - - - -')
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))          // Não é um formato json válido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))    // tentandi parse(), mas tb inválido

// Os testes acima falharam, pois o nome do atributo em JSON 
// deve ser definido entre aspas duplas
// é possível ter um objeto dentro do outro
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))