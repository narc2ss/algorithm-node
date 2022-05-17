const getCountOfOneInNumber = (number) => {
  return number
    .toString(2)
    .split("")
    .filter((char) => char === "1").length;
};
function solution(n) {
  let startNumber = n + 1;
  const countInN = getCountOfOneInNumber(n);
  while (true) {
    if (getCountOfOneInNumber(startNumber) === countInN) return startNumber;
    startNumber++;
  }
}
