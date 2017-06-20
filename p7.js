//What is the 10,001st prime number?
const myModule = require('./module.js');

primes = myModule.primes(10001);
console.log(primes[primes.length - 1])
//Answer: 104743