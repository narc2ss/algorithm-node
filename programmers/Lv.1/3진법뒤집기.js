function solution(n) {
  const arr = [];

  while (n > 0) {
    arr.push(n % 3);
    n = Math.floor(n / 3);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = 3 ** (arr.length - (i + 1)) * arr[i];
  }

  return arr.reduce((a, b, c) => a + b, 0);
}
