(() => {
  const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
  let min, temp, index;

  for (let i = 0; i < arr.length; i++) {
    min = 99999;
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }

  console.log(arr);
})();
