exports.fibonacci = function fibonacci(n) {
	n = (typeof n === 'undefined') ? 2 : n
	var fib_arr = [0, 1];
	for(let i = 2; i < n; i++) {
		fib_arr.push(fib_arr[i-2] + fib_arr[i-1]);
	}
	last = 2;

	function doPush() {
		last = fib_arr[n-1] + fib_arr[n-2];
		fib_arr.push(last);
		n++;
		return fib_arr;
	}

	function doPeek() {
		return fib_arr[n-1] + fib_arr[n-2];
	}

	var publicAPI = {
		push : doPush,
		peek : doPeek,
		fib : fib_arr,
		length : n,
		end : last
	}

	return publicAPI;
}

exports.gcd = function greatestCommonDivisor(num1, num2) {
	while(num2 !== num1) {
		if(num2 > num1)
			[num2, num1] = [num1, num2];
		num1 -= num2;
	}
	return num1
}

exports.lcm = function leastCommonMultiple(num1, num2) {
	return num1 / exports.gcd(num1, num2) * num2;
}

exports.dsf = function directSearchFactorization(num) {
	for(let i = 2; i <= Math.sqrt(num); i++) {
		if(num % i === 0)
			return i;
	}
	return num;
}

exports.prime_factors = function getAllPrimeFactors(num) {
	var pfs = {1: true};
	while(num !== 1) {
		var primeFactor = exports.dsf(num);
		if( !pfs[primeFactor] ) {
			pfs[primeFactor] = true;
		}
		num /= primeFactor;
	}
	return pfs;
}

function relativelyPrime(num, factors) {
	for(let j = 0; j < factors.length; j++) {
		if(num % factors[j] === 0)
			return false;
	}
	return true;
}

exports.wf = function wheelFactorization(num) {
	var factors = [2, 3, 5];
	for(let i = 2; i <= Math.sqrt(num); i++) {
		if(relativelyPrime(i, factors)) {
			if(!relativelyPrime(num, [i])) {
				return false;
			}
		}
	}
	return true;
}

exports.primes = function getPrimes(count, value) {
	var primes = [2,3];
	var prime_count = 2;
	var new_prime = primes[primes.length - 1] + 2;

	while(prime_count <= count || new_prime <= value) {
		for(var i = 0; i < primes.length; i++) {
			if(new_prime % primes[i] == 0)
				break;
		}
		if(i == primes.length) {
			primes.push(new_prime);
			prime_count++;
		}
		new_prime += 2;
	}
	return primes;
}

//console.log(exports.primes(undefined, 10))

// console.log(exports.wf(3331) )

// var arr = exports.fibonacci();
// console.log(arr)
// console.log(arr.push())
// console.log(arr.push())


// console.log(exports.gcd(40,80));
// console.log(exports.lcm(40,80));

// console.log(exports.prime_factors(2520))



