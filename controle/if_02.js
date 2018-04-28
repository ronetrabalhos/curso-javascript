function teste1(num) {
    if(num > 7)
        console.log('teste 1', num)
    
    console.log('Final')
}

teste1(6)
teste1(8)

console.log('- - - - - - - - - - - - - - - - - - - -')

function teste2(num) {
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log('teste 2: ', num)
    }
}

teste2(6)
teste2(8)

// ==========================================
// Por que imprimiu os dois valores???
// ==========================================

// Devido ao ; o if se tornou um bloco de código 
// vazio, logo independente que o valor da expressão
// seja falso, o número será impresso.


// function teste2(num) {
//     if(num > 7) 
//         ; virou um bloco de código vazio
    
//     {
//         console.log('teste 2: ', num)
//     }
//
// }