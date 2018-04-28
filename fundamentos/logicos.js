/*
 * Tabela verdade
 * 
 * operando E (e) 
 * 
 * v E v -> v
 * v E f -> f
 * f E ? -> f
 * 
 * Operando OU [ || ]
 * 
 * v OU ? -> v
 * f OU v -> v
 * f OU f -> f
 * 
 * Operando XOR exclusivo
 * 
 * v XOR v -> f
 * v XOR f -> v
 * f XOR v -> v
 * f XOR f -> f
 * 
 * Negação lógica
 * 
 * !v -> f
 * !f -> v
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // simula o XOR
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
// console.log(compras(true, false))
// console.log(compras(false, true))
// console.log(compras(false, false))