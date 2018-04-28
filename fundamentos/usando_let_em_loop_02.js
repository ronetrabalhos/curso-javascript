/*
 * atualizando o exemplo da aula anterior, agora temos a 
 * saída esperada (2 e 8)
*/

let funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[8]()

console.log('- - - - - ');

for(let i = 0; i < funcs.length; i++){
    funcs[i]()
}