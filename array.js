const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // nao da erro, apenas undefined (indefinido)

valores[4] = 4.7
console.log(valores[4])

valores[10] = 10.4 // o javascript insere os elementos vazios até o índice 10
console.log(valores)

console.log('tamanho do array: '+ valores.length)

// como o javascript é fracamente tipado ele é heterogênio
// aceita no mesmo array diferentes tipos de dados
// não é interessante ter array com tipos diferentes no mesmo array


// a função push() adiciona novos elementos ao array
valores.push({id: 3}, false, null, 'teste') //objeto, boolean, nulo, string
console.log(valores)

// a função pop() pega o último elemento do array e retira-o
valores.pop()
console.log(valores)

// outra forma de tirar itens do array é utilizando delate()
delete valores[0]
console.log(valores)

// array é do tipo object
console.log(typeof valores)