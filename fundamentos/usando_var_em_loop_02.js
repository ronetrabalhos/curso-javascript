/*
 * aqui temos um problema clássico do javascript
 * por isso recomenda-se usar o let, para evitar 
 * situações como essa
*/

var funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[8]()