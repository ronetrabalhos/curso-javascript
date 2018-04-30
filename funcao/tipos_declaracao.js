console.log(soma(3, 4))

// function declaration
// A vantagem de declarar deste tipo é que o interpretador
// do JS irá carregá-la antes de qualquer chamada a ela.
// Como podemos ver, a função soma foi chamada antes da 
// escrita da função e não gerou erro.
// Desvantagem é o controle do estado (this)
function soma(x, y) {
    return x + y
}

// function expression
// Só pode ser invocada após ser declarada. O interpretador
// não carrega ela antes
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
// Só pode ser invocada após ser declarada. O interpretador
// não carrega ela antes
// O uso dessa assinatura é pouquíssimo usada.
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))