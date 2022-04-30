function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) continue;

      const sum = numbers[i] + numbers[j];

      if (answer.includes(sum)) continue;

      answer.push(sum);
    }
  }

  return answer.sort((a, b) => a - b);
}
