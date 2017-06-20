//Find the largest palindrome made from the product of two 3-digit numbers.
//Stupid brute force approach

function checkIfPalindrome(num) {
	if(!num)
		return false;
	num = String(num);
	for(let i = 0; i < num.length/2; i++) {
		if(num[i] !== num[num.length - i - 1])
			return false;
	}
	return true;
}

//var [num1, num2] = [999, 999];
var largestPalindrome = 1;
for(var num1 = 999; num1 >= 1; num1--) {
	for(var num2 = 999; num2 >= 1; num2--) {
		num = num1 * num2;
		if(checkIfPalindrome(num)) {
			if(num > largestPalindrome) {
				largestPalindrome = num;
				break;
			}
		}
	}
}

console.log(largestPalindrome);