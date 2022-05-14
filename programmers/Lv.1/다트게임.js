const isNumber = (char) => {
  return !isNaN(Number(char));
};

function solution(result) {
  const pow = { S: 1, D: 2, T: 3 };
  const scores = [];

  let score = "";
  for (let i = 0; i < result.length; i++) {
    const char = result[i];

    if (isNumber(char)) {
      score += char;
      if (isNumber(result[i + 1])) {
        score += result[i + 1];
        i++;
      }
      score = Number(score);
    }

    if (char == "S" || char == "D" || char == "T") {
      score **= pow[char];
      scores.push(score);
      score = "";
    }

    if (char == "*" || char == "#") {
      if (char == "*") {
        scores[scores.length - 1] *= 2;
        scores[scores.length - 2] *= 2;
      } else {
        scores[scores.length - 1] *= -1;
      }
    }
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
}
