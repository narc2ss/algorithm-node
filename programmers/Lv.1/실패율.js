function solution(N, stages) {
  var answer = [];
  const obj = {};
  for (let stage = 1; stage <= N; stage++) {
    const challengers = [];
    const notClearedUsers = [];
    for (let i = 0; i < stages.length; i++) {
      if (stages[i] >= stage) challengers.push(stages[i]);
      if (stages[i] == stage) notClearedUsers.push(stages[i]);
      obj[stage] = notClearedUsers.length / challengers.length;
    }
  }

  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map((data) => parseInt(data[0]));
}
