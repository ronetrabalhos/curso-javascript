function Pessoa() {

    // usando o this deixa idade disponível para
    // manipulação, a partir da criaçao de outro
    // objeto
    this.idade = 0

    // essa constante recebe uma referência de this
    // isso garantirá que o this faz parte do escopo de Pessoa
    // O this fica amarrado, como esperado
    // self é um nome comum utilizado para esse tipo de ação
    // Lembrando que a instância do this foi criada na ao ser
    // invocada através de [new Pessoa] na linha 28 
    const self = this

    // setInterval() -> temporizador
    // setInterval() dispara uma outra função conforme
    // intervalo determinado
    // No caso desse exemplo, será a casa 1000 milesegundos
    // esse valor é informado após fechamento dos {}
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

// instanciou um novo objeto Pessoa
new Pessoa