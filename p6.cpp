#include <iostream>


int main() {
	int n = 1000;
	int q1 = 0;
	int q2 = 0;
	clock_t start1 = clock();
	for(int i = 1; i <= n; i++) {
		q1 += i * i;
		q2 += i;
	}
	q2 *= q2;
	int res1 = q2 - q1;
	std::cout << res1 << std::endl;
	std::cout << (clock() - start1) / (double) CLOCKS_PER_SEC * 1000 << "ms" << std::endl;

	clock_t start2 = clock();
	int q3 = 0;
	for(int i = 1; i <= n; i++) {
		for(int j = i + 1; j <= n; j++) {
			q3 += i * j;
		}
	}
	int res2 = q3 * 2;
	std::cout << res2 << std::endl;
	std::cout << (clock() - start2) / (double) CLOCKS_PER_SEC * 1000 << "ms" << std::endl;

	return 0;
}