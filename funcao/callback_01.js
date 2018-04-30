/*
 * O padrão mais utilizado da web é o OBSERVER
 * 
 * Como a web é baseada em JS, e o observer é um dos pontos forte da linguagem
 * ele é possivelmente o padrão mais utilizado.
 * 
 * 
 * Sinônimos para OBSERVER
 * -----------------------
 * 
 * Javascript: Event Handler
 * Java: Listner
 * Swift:
 * C++:
 * PHP:
 * Ruby:
 * 
 * As anotações anteriores referem-se a aula disponível no link
 * https://www.cod3r.com.br/portal/courses/padr%C3%B5es-de-projeto-14
 * 
 * 
 * =======================================
 * Callback - princípio básico
 * =======================================
 * 
 * Passar uma função para outra função e qdo terminando o evento acontecer
 * a função repassada será chamada de volta. A função callback
 * pode ser chamada várias vezes ou apenas uma única vez, dependendo
 * do contexto em que ela foi passada essa função
 * 
 * Nos exemplos abaixo o evento seria 
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

/*
 * A assinatura dessa função, ou seja, o modo como ela foi escrita,
 * possibilita a passagem dela para uma função forEach
*/

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

console.log('- - - - - - - - - - - - - - - - - - - -')

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

console.log('- - - - - - - - - - - - - - - - - - - -')

fabricantes.forEach(fabricante => console.log(fabricante))
