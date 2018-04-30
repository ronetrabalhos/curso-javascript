/*
 * Função autoinvocada
 * 
 * IIEF: Immediately Invoked Function Expression
 * 
 * É uma função anônima e que na hora da declaração ela já invoca a 
 * execução dessa função.
 * 
 * Num ambiente browser, ele é utilizada para fugir da manipulação 
 * dos itens que estão no escopo global.
 * 
 * Qdo o script é lido, o trecho que está dentro da função já será
 * chamado e executado, só que tudo que for criado dentro da função
 * será do escopo local daquela função e não escopo global.
 * 
 * Isso ajuda a evitar manipular valores diretos no escopo global,
 * pois se algo é compartilhado com toda a aplicação e pode ser
 * modificado, como variáveis, isso pode causar erros.
 *  
*/

(
    function(){
        let nome = 'Gustavo'
        console.log('Será invocado na hora!!!')
        console.log('Foge do escopo global!!!')
        console.log('Meu nome é: ', nome)
    }
)()

// Como a função é IIEF a variável nome não faz parte do escopo
// global. Tentar acessá-la gera o erro: "nome is not defined"

// console.log('Meu nome é: ', nome)
