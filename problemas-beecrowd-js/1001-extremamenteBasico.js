var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numeroUm = +lines[0];
const numeroDois = +lines[1];
const soma = numeroUm + numeroDois;

console.log(`SOMA = ${soma}`);