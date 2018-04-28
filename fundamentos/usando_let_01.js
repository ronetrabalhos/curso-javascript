/*
 * A leitura do escopo ocorre do menor para o maior, ou seja,
 * primeiro verifica se existe dentro do bloco menor e depois
 * no bloco global.
 * Portanto, a saída desse código será:
 * dentro:  2
 * fora  :  1
 * 
 * ATENÇÃO
 * 
 * Variável declarada como let tem escopo:
 * - global
 * - função
 * - bloco (* ponto diferencial)
*/

var numero = 1

{
    let numero = 2
    console.log('dentro: ', numero);
    
}

console.log('fora: ', numero);
