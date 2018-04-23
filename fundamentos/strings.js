// String inicia na posição 0

const escola = "C3od3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))   // Não gera erro. Só não exibe nada

console.log(escola.charCodeAt(3))   // Código Unicode

console.log(escola.indexOf('3'))
console.log(escola.indexOf('r'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola.concat('!')))
console.log('Escola ' + escola + '!!!')

console.log(escola.replace(3, 'E'))
console.log(escola.replace(/\d/, 'E'))   // expressão regular - substitua o primeiro dígito encontrado pela letra E
console.log(escola.replace(/\d/g, 'E'))  // expressão regular - substitua todos os dígitos encontrados pela letra E

console.log('Ana, Maria, Pedro'.split(',')) // split gera um array de uma string usando o delimitador informado (',')
console.log('Ana, Maria, Pedro'.split(/,/)) // split usando regex

console.log('teste'.length)
