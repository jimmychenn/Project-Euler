//Find the sum of all the primes below two million.
const myModule = require('./module.js');

primes = myModule.primes(undefined, 2000000);
console.log(primes.reduce(function(total, num) { return total + num}))

//slow implementation
//answer: 142913828922