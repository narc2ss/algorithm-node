(() => {
  const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

  const quickSort = (data, start, end) => {
    if (start >= end) {
      return;
    }

    let pivot = start;
    let left = start + 1;
    let right = end;
    let temp;

    while (left <= right) {
      while (data[left] <= data[pivot]) {
        left++;
      }
      while (data[right] >= data[pivot] && right > start) {
        right--;
      }
      if (left > right) {
        temp = data[right];
        data[right] = data[pivot];
        data[pivot] = temp;
      } else {
        temp = data[right];
        data[right] = data[left];
        data[left] = temp;
      }
    }

    quickSort(data, start, right - 1);
    quickSort(data, right + 1, end);
  };

  quickSort(arr, 0, arr.length - 1);

  console.log(arr);
})();
