function solution(board, moves) {
  let answer = 0;
  let bucket = [];

  moves.forEach((column) => {
    const doll = getDoll(board, column - 1);

    if (doll) {
      if (bucket[bucket.length - 1] === doll) {
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(doll);
      }
    }
  });

  return answer;
}

const getDoll = (board, column) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] === 0) continue;
    else {
      const doll = board[i][column];
      board[i][column] = 0;
      return doll;
    }
  }
};
