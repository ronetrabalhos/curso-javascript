// função é um bloco de código, nomeado, recebe ou não parâmetros de entradas

// função sem retorno
// O comum é não deixa explicito o retorno na função

function imprimirSoma(a, b){
    console.log(a + b);
    
}

imprimirSoma(2,3)
imprimirSoma(2) // NaN, pois tenta somar 2 com undefined, visto que não foi definido um valor padrao para b
imprimirSoma(2, 10, 4, 5, 6) // soma os dois primeiros (a,b) e ignora os valores 4, 5, 6


// funcao com retorno
// b = 0 define zero como valor padrão para b
function soma(a, b = 0){
    return a + b
}

console.log(soma(2,4))
console.log(soma(2))
console.log(soma()) // NaN, pois tenta somar undefined com 0