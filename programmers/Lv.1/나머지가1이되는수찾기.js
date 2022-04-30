function solution(n) {
  let min = n % (n - 1);

  for (let i = n - 1; i > 0; i--) {
    if (n % i === 1) min = i;
  }

  return min;
}
