function directSearchFactorization(number) {
	for(let i = 2; i <= Math.sqrt(number); i++) {
		if(number % i === 0)
			return i;
	}
	return number;
}

var testTarget = 13195;
var target = 600851475143;

var largestPrimeFactor = 1;
while(target !== 1) {
	var primeFactor = directSearchFactorization(target);
	if(primeFactor > largestPrimeFactor) {
		largestPrimeFactor = primeFactor;
	}
	target /= primeFactor;
}

console.log(largestPrimeFactor);