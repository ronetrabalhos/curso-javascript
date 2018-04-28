/*
 * modificando o exemplo para let
*/

for(let i = 0; i < 10; i++){
    console.log('i = ', i);
}

/*
 * devido o let i estar dentro do laço de repetição
 * não será possível acessar a variável fora do laço
 * gerando um erro
*/

console.log('i depois do for: ', i);