/*
 * Em javascript objeto e class são functions
 * Então é possível instanciar tanto objeto quanto função
*/

console.log(typeof Object);
console.log(typeof new Object); // instanciando uma função
console.log(typeof new Object()); // mesmo do anterior

const Cliente = function(){}
console.log(typeof Cliente);
console.log(typeof new Cliente);
console.log(typeof new Cliente());

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto);
console.log(typeof new Produto());




