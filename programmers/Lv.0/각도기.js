const angleMap = {
  "0.": 1,
  1: 2,
  "1.": 3,
  2: 4,
};

function solution(angle) {
  return angleMap[String(angle / 90).substr(0, 2)];
}
