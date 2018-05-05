/*
 * get e set são funções que para retorno e alteração de 
 * variáveis privadas
 * 
 * JS não aceita sobrecarga de métodos (métodos com o mesmo nome,
 * mas com número de parâmetros diferentes)
 * 
 * Usando o get e set é possível fazer validações antes da alteração
 * do valor da variável
 * 
 * Em JS convencionou-se que o uso de _ (underscore) antes do nome da 
 * variável, significa que ela é privada.
*/

const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            console.log('alterando o valor com set valor()')
            this._valor = valor
        }
        else{
            console.log('O valor informado ('+ valor+') é inferior a: ', this._valor )
        }
    }
}

console.log(sequencia.valor)
console.log(sequencia.valor)
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor)
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

sequencia._valor = 300

// pulando as validações
console.log('Forçando alteração do valor sem usar set')
console.log(sequencia._valor)