/*
 * Usando o Operador Destructuring (OD) aplicado em uma função
 * A função recebe como parâmetro um array, pois a construção
 * da função rand foi construida com o operador destructuring
 * 
 * Modelo clássico de função
 * function rand(min, max){ }
 * 
 * Modelo com OD
 * function rand([min = 0, max = 1000]){ }
 * 
*/



function rand([min = 0, max = 1000]) {
    // Caso o valor mínimo seja maior que o valor máximo
    // cria-se um novo array através do OD e atribui
    // os valores de forma correra
    if (min > max){
        [min, max] = [max, min]
        console.log('Valores invertidos')
    } 

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const meu_array = [10, 20]

console.log('Número retornado [array como constante]         : ', rand(meu_array))
console.log('Número retornado [array no corpo da chamda]     : ', rand([50, 60]))
console.log('Número retornado [array no corpo vr invertido]  : ', rand([100, 60]))
console.log('Número retornado [array no corpo e somente min] : ', rand([800]))
console.log('Número retornado [array no corpo e somente max] : ', rand([,300]))
console.log('Número retornado [array no corpo sem valores]   : ', rand([]))
