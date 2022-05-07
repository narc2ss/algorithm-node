function solution(numbers, hand) {
  let answer = "";
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const lp = [3, 0];
  const rp = [3, 2];

  numbers.forEach((num) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (num !== keypad[i][j]) continue;

        if ([1, 4, 7].includes(num)) {
          lp[0] = i;
          lp[1] = j;
          answer += "L";
        } else if ([3, 6, 9].includes(num)) {
          rp[0] = i;
          rp[1] = j;
          answer += "R";
        } else {
          const leftDistance = getDistance(lp, i, j);
          const rightDistance = getDistance(rp, i, j);
          if (leftDistance < rightDistance) {
            lp[0] = i;
            lp[1] = j;
            answer += "L";
          } else if (leftDistance > rightDistance) {
            rp[0] = i;
            rp[1] = j;
            answer += "R";
          } else {
            if (hand === "left") {
              lp[0] = i;
              lp[1] = j;
              answer += "L";
            } else {
              rp[0] = i;
              rp[1] = j;
              answer += "R";
            }
          }
        }

        break;
      }
    }
  });

  return answer;
}

const getDistance = (p, row, column) => {
  return Math.abs(p[0] - row) + Math.abs(p[1] - column);
};
