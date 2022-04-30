function get_ranking(correct_count) {
  switch (correct_count) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  let unknown_count = 0;
  let correct_count = 0;
  for (let i = 0; i < 6; i++) {
    if (lottos[i] == 0) {
      unknown_count++;
      continue;
    }
    for (let j = 0; j < 6; j++) {
      if (lottos[i] == win_nums[j]) {
        correct_count++;
      }
    }
  }

  return [
    get_ranking(correct_count),
    get_ranking(correct_count + unknown_count),
  ].sort((a, b) => a - b);
}
