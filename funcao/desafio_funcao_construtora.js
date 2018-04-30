/*
 * Dasafio:
 * Transformar a class abaixo em uma função construtora
*/

// =====================================================
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('João')
// p1.falar()
// =====================================================



function Pessoa(nome = 'Nome não informado'){

    // Parâmetro público
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Rone')
p1.falar()


/*
 * É POSSÍVEL CRIAR OBJETO ATRAVÉS DE UMA FUNÇÃO:
 * 
 * - Construtora
 * - Factory
 * - Class
 * 
*/
