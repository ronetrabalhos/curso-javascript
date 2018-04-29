/*
 * Mostrando que o this não muda numa funçao Arrow
 * 
 * this não varia de acordo com quem está chamando
 * o exemplo mostra isso, pois no exemplo passado,
 * semelhante a esse, foi necessário setar o this
 * antes da função sentInterval().
 * 
 * Agora, bastou transformar essa funçao em uma
 * AF que temos o resultado esperado, visto que
 * o this permaneceu inalterado.
*/


function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa