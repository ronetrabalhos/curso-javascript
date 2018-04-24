let isAtivo = false
console.log("=======================================")
console.log(isAtivo)

isAtivo = true
console.log("=======================================")
console.log(isAtivo)

isAtivo = 1
console.log("=======================================")
console.log(!!isAtivo)

console.log("=======================================")
console.log('Os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))

console.log("=======================================")
console.log('Os falsos ...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("=======================================")
console.log('Para finalizar ...')
console.log(!!('' || null || 0 || 'epa'))
console.log(  ('' || null || 0 || 'epa' || 123)) // retornou o primeiro verdadeiro


let nome = 'Lucas'
console.log("=======================================")
console.log(nome || 'Desconhecido')  // Se a variaável nome não tivesse o valor lucas, retornaria Desconhecido


