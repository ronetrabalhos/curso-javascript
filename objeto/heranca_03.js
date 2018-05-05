/*
 * 
*/

const pai = {nome: 'Pedro', corCabelo: 'preto', alergia: 'paracetamol'}

/*
 * Criando objeto através de Object.create(OBJETO PAI)
 * criando objeto filha tendo como protótipo o objeto pai
*/

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

console.log('- - - - - - - - - - - - - - - - - - - -')
const filha2 = Object.create(
    pai, 
    {
        nome: { 
                value: 'Bia',
                writable: false, 
                enumerable: true 
            }
    }
)

console.log(filha2.nome)

console.log('- - - - - - - - - - - - - - - - - - - -')
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log('- - - - - - - - - - - - - - - - - - - -')
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


/*
 * Percorrer o objeto e testar se a proriedade pertence ao objeto
 * ou se a propriedade veio do protótipo
*/

for(let key in filha2) {
    // o texte abaixo é:
    // aquela propriedade pertence a ela ou é de um protótipo
    filha2.hasOwnProperty(key) ?
        console.log(`Pertence ao objeto: ${key}`) : console.log(`Por herança: ${key}`)
}