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

  const update = (p, np, char) => {
    p[0] = np[0];
    p[1] = np[1];
    answer += char;
  };

  numbers.forEach((num) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (num !== keypad[i][j]) continue;

        if ([1, 4, 7].includes(num)) update(lp, [i, j], "L");
        else if ([3, 6, 9].includes(num)) update(rp, [i, j], "R");
        else {
          const leftDistance = getDistance(lp, i, j);
          const rightDistance = getDistance(rp, i, j);
          if (leftDistance < rightDistance) update(lp, [i, j], "L");
          else if (leftDistance > rightDistance) update(rp, [i, j], "R");
          else {
            if (hand === "left") update(lp, [i, j], "L");
            else update(rp, [i, j], "R");
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
