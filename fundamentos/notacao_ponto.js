console.log(typeof console) // console também é um objeto

const obj01 = {}

obj01.nome = 'Bola 01'
//obj01['nome'] = 'Bola 02'  // equivalente ao anterior, porém sem usar o ponto

console.log(obj01.nome)


function Obj(nome){
    this.nome = nome, // o this. deixa o atributo público para função
    end = 'rua feliz',
    this.amigo = true,
    this.funcaoMSG = function(mensagem){
        console.log('Aqui vai a mensagem enviada: ', mensagem)
    }
}

const obj02 = new Obj('Gustavo')
const obj03 = new Obj('Quites')

console.log(obj02)
console.log(obj03)
console.log(obj02.nome)
console.log(obj02.end) // como esse atributo não é público, ele é undefined

obj02.funcaoMSG('minha mensagem')

