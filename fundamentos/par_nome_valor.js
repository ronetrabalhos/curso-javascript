// par nome / valor
const saudacao = 'opa' // contexto léxico

function exec(){
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123,
        cidade: 'rio de janeiro'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);