//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.

function get_c(num_b) {
	var c = 1000*1000 + 2 * num_b * num_b - 2000 * num_b;
	c /= -(2 * num_b - 2000);
	return c;
}

var largest_abc = 0;
for(let b = 1; b <= 500; b++) {
	let c = get_c(b);
	let a = 1000 - b - c;
	if(Number.isInteger(a) && Number.isInteger(c) ) {
		console.log("a:" + a + " b:" + b + " c:" + c);
		abc = a * b * c;
		largest_abc = abc > largest_abc ? abc : largest_abc;
	}
}

console.log(largest_abc);

