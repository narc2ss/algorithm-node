function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      let temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
  }

  let maxWidth = sizes[0][0];
  let maxHeight = sizes[0][1];

  for (let i = 1; i < sizes.length; i++) {
    if (sizes[i][0] > maxWidth) maxWidth = sizes[i][0];
    if (sizes[i][1] > maxHeight) maxHeight = sizes[i][1];
  }

  return maxWidth * maxHeight;
}
