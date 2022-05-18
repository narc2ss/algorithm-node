function solution(s) {
  s = s.toLowerCase().split(" ");
  for (let i = 0; i < s.length; i++) {
    let temp = "";
    for (let j = 0; j < s[i].length; j++) {
      temp += j === 0 ? s[i][0].toUpperCase() : s[i][j];
    }
    s[i] = temp;
  }
  return s.join(" ");
}
