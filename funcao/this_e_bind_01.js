const pessoa = {
    // par chave: valor
    saudacao: 'Bom dia!',

    // funcao - disponivel a partir do ES2015
    falar(){
        // utiliza-se o this, pois queremos o valor da chave
        // saudação que está dentro do contexto pessoa
        console.log(this.saudacao)
    }
}

pessoa.falar()

// O proximo texte dará undefined, pois o this não faz parte
// do contexto da constante falar, visto que ao armazenar a 
// funcão dentro de falar, mudou-se o contexto
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO


// Para resolver o problema utilizamos o bind()
// No bind é passado como parâmetro o nome do objeto 
// onde deve ser resolvido o conflito do this.
//
// A função bind() retorna uma outra função que está
// amarrada a solução do problema do conflito this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
