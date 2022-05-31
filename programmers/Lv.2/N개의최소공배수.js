const getGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return getGcd(num2, num1 % num2);
};

function solution(arr) {
  return arr.reduce((num1, num2) => (num1 * num2) / getGcd(num1, num2));
}
