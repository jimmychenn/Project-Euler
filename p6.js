//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

//q1 = (k1 + k2 + ... + kn)^2
//n additions, one multiplications
//q2 = k1^2 + k2^2 + ... + kn^2
// n additions, n multiplications
//total = 2n additions and n+1 multiplications

//q1 - q2 = 2*k1*k2 + ... + 2*k1*kn + 2*k2*k3 + ... + 2*k2*kn + ... 2*kn-1*kn
//q1 - q2 = 2*(k1*k2 + ... + k1*kn + k2*k3 + ... + k2*kn + k3*k4 + ... + k3*kn + ... + kn-1*kn)
// # of terms = n-1 + n-2 + n-3 + n-4 + ... + 1
// = n * n - n*(n+1)/2
// = (2n^2 - n^2 -n)/2
// = (n^2 - n)/2
// = n*(n-1)/2
// n*(n-1)/2 additions and n*(n-1)/2 + 1 multiplications

//faster computation is to compute q1 and q2 as is

var n = 100;
var q1 = 0;
var q2 = 0;
console.time()
for(let i = 1; i <= n; i++) {
	q1 += i*i;
	q2 += i;
}

q2 *= q2;
var result1 = q2 - q1;
console.log(result1);
console.timeEnd();

var q3 = 0;
console.time();
for(let i = 1; i <= n; i++) {
	for(let j = i+1; j <= n; j++) {
		q3 += i * j;
	}
}
var result2 = 2 * q3;
console.log(result2);
console.timeEnd();

//result shows that
//		first method takes ~2.3 ms
//		second method takes ~0.25 ms
//only for n = 100
//first method is much faster for larger n