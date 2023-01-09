function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        if (board?.[i - 1]?.[j - 1] === 0) board[i - 1][j - 1] = 2;
        if (board?.[i - 1]?.[j] === 0) board[i - 1][j] = 2;
        if (board?.[i - 1]?.[j + 1] === 0) board[i - 1][j + 1] = 2;
        if (board?.[i]?.[j - 1] === 0) board[i][j - 1] = 2;
        if (board?.[i]?.[j + 1] === 0) board[i][j + 1] = 2;
        if (board?.[i + 1]?.[j - 1] === 0) board[i + 1][j - 1] = 2;
        if (board?.[i + 1]?.[j] === 0) board[i + 1][j] = 2;
        if (board?.[i + 1]?.[j + 1] === 0) board[i + 1][j + 1] = 2;
      }
    }
  }

  let ret = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j]) ret += 1;
    }
  }

  return ret;
}
