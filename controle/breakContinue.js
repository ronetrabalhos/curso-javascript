/*
 * Break e Continue é utilizado para desvio de fluxo
 * e devem ser evitados!!!!!!
 * 
 * Break funciona com:
 * - switch
 * - for
 * - while
 * 
 * Continue funciona com:
 * - for
 * - while
 * 
 * Utilize apenas se necessário
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        console.log('Parei no índice: ', x)
        break
    }
    console.log(`Índice ${x} = ${nums[x]}`)
}

console.log('- - - - - - - - - - - - - - - - - - - -')

for (y in nums) {
    if (y == 5) {
        console.log('pulei o índice : ', y)
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('- - - - - - - - - - - - - - - - - - - -')

// externo: é um rótulo para a expressão mais externa
// através desse rótulo, é possível chamar o brake para ele
// Dê preferência a NÃO UTILIZAR esse tipo de estrutura
externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // brake para [for (a in nums)]
        console.log(`Par = (${a},${b})`)
    }
    console.log('saí do laço interno')
}