(() => {
  const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
  let temp, j;

  for (let i = 0; i < arr.length - 1; i++) {
    j = i;
    while (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
    }
  }

  console.log(arr);
})();
