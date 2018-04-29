// estrategia 1 para gerar valor padrão
// Zero, nestra estratégia, é visto como falso
// por isso ele pegará o valor padrao 1
function soma1(a, b, c) {
    a = a || 1  // lê-se: recebe valor de a OU o valor padrao 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))



console.log('- - - - - - - - - - - - - - - - - - - -')

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    
    // se existir a,
    // verifica se é diferente de undefined
    // se sim, pega valor de a
    // senão, pega o valor padão 1
    a = a !== undefined ? a : 1
    
    // dentro de arguments existe o valor em indice 1, 
    //se sim, pega b, 
    //senão, pega valor padrao 1
    b = 1 in arguments ? b : 1 

    // verifica se é NaN
    // se sim, retorna o valor padrao 1
    // senão, pega o valor informado
    // ESSA É A OPÇÃO MAIS SEGURA E CORRIGE O PROBLEMA DO 0
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))



console.log('- - - - - - - - - - - - - - - - - - - -')

// ============================================
// valor padrão do es2015
// FORMA ATUAL E QUE DEVE SER UTILIZADA
// ============================================

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))