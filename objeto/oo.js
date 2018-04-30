/*
 * Linguagem Procedural
 * 
 * Essa linguagem é baseada em procedimentos, em funções
 * FOCO: em funções que manipulam dados
 * 
*/

// Procedimento recebendo 3 valores e ele deve manipular
// tais dados
processamento(valor1, valor2, valor3)



 /*
  * OO - Orientação a objetos
  * 
  * FOCO: Você tem dados e dentro desse dados você tem funções
  * As estruturas que geram objetos podem ser classes, funções, ...
  * O Objeto e suas estruturas geradoras são o elemento principal da abordagem.
  * 
  * O Objeto é um envólocro que envolve dados e funções
  * 
 */
 
 objeto = {
     valor1,
     valor2,
     valor3,
     processamento() {
         // ...
     }
 }

 objeto.processamento() // Foco passou a ser o objeto

 /*
  * Principios importantes:
  * 
  * 1. abstracao
  *    Pegar um objeto do mundo real e tentar traduzi-lo para seu projeto
  *    Como mapear o mundo abstraindo (simplificado) os itens importantes para o sistema
  *    ex.: carro
  * 
  * 
  * 2. encapsulamento
  *    É ter os detalhes de implementação velados e apresentar para o usuário uma interface
  *    de comunicação simples para assim interagir com determinado objeto.
  *    ex.: objeto (carro); velado (a queima no texto); visível (como liga o carro)
  * 
  * 
  * 3. herança (prototype)
  *    relação de parentesco entre os objetos
  *    JS só permite um pai
  *    herança é baseado em protótipo
  *    Relação [T -> 1]: Meu amigo tem um carro
  *    Relação [E -> 1]: O civic é um carro. A ferrari é um carro
  *    Priorise a composição T -> 1 no lugar da herança E -> 1
  * 
  * 
  * 4. polimorfismo
  *    A partir do conceito genérico é possível criar objetos reais
  *    Atribui ao atributo pai, atributos específicos
  * 
 */
 