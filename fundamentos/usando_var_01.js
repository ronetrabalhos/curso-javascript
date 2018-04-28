/* 
 * a variável var só possui 2 escopos:
 * 
 * - global: visível em toda a aplicação
 * - escopo de função: visível apenas dentro da função
*/



// Dentro de um bloco de código, não sendo uma função
// a variável var será visivel globalmente
{
    {
        {
            {
                var sera = 'será???'
            }
        }
    }
}
console.log('solto: ' + sera)

function teste(){
    var local = 123
    console.log('valor local: ' + local);
    console.log('dentro da function teste: ' + sera);
}

// como a variavel local foi criada dentro de uma função,
// a funçao delimita o seu escopo de visibilidade
// isso causará erro de execução
// console.log(local);

// chamando a funcao
teste()
