/*
 * Entendendo o this
 * 
 * this acessa quem ali é o dono do objeto que está sendo usando naquele momento
 * o this pode variar dependendo de como a função é chamada (isso ocorre quando
 * a função é construída da forma tradicional, com a estrurura function nome(){}. 
 * No modelo Arrow Function isso não ocorre, mantendo this o mesmo, pois o this 
 * será definido quando a função for definida. Isso garante que o this mantém 
 * o contexto que foi declarado [isso é chamado de this léxico])
 * 
 * this é sempre o objeto que está sendo referenciado naquele contexto de execução
 * 
 * A funçao Arrow é mais enxuta
 * Mas o grande motivador é que o this passou a ser associado ao contexto que foi
 * criada / escrita dentro contexto global.
 * 
 * Numa função normal, para amarrar o this a um contexto, deve ser utilizado a
 * função bind()
 * 
*/

