const myModule = require('./module.js');

var arr = myModule.fibonacci();
console.log(arr.fib)

var sum = 0;

while(arr.peek() < 4000000) {
	val = arr.peek();
	if(val % 2 === 0) {
		sum += val;
	}
	arr.push();
} 

console.log(sum);