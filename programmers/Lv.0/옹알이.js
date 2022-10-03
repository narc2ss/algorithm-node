function solution(babbling) {
  const words = {
    a: "aya",
    y: "ye",
    w: "woo",
    m: "ma",
  };
  const ret = [];
  for (let i = 0; i < babbling.length; i++) {
    let prevWord = "";
    let tempWords = "";
    let currentWord = words[babbling[i][0]];
    while (currentWord) {
      if (currentWord === prevWord) break;
      prevWord = currentWord;
      tempWords += currentWord;
      currentWord = words[babbling[i][tempWords.length]];
    }
    if (tempWords === babbling[i]) ret.push(babbling[i]);
  }
  return ret.length;
}
