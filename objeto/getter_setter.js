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
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

sequencia._valor = 300
console.log(sequencia._valor)