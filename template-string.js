const nome = "Rabeca"
const concatenacao = 'Olá ' + nome + '!';
const tamplateString = `
    Olá
    ${nome}!
`

console.log(concatenacao, tamplateString);

// ==============================
// expressoes

console.log(`1 + 1 = ${1 + 1}`)

// ==============================
// função arrow

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);

