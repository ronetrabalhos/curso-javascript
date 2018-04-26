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
console.log(sera)

function teste(){
    var local = 123
    
}