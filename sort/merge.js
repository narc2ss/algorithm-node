(() => {
  const sorted = [];

  const merge = (data, start, middle, end) => {
    let left = start;
    let right = middle + 1;
    let key = start;

    while (left <= middle && right <= end) {
      if (data[left] <= data[right]) {
        sorted[key] = data[left];
        left++;
      } else {
        sorted[key] = data[right];
        right++;
      }
      key++;
    }

    if (left > middle) {
      for (let i = right; i <= end; i++) {
        sorted[key] = data[i];
        key++;
      }
    } else {
      for (let i = left; i <= middle; i++) {
        sorted[key] = data[i];
        key++;
      }
    }

    for (let i = 0; i <= end; i++) {
      data[i] = sorted[i];
    }
  };

  const mergeSort = (data, start, end) => {
    if (start < end) {
      const middle = Math.floor((start + end) / 2);
      mergeSort(data, start, middle);
      mergeSort(data, middle + 1, end);
      merge(data, start, middle, end);
    }
  };

  const arr = [1, 7, 8, 5, 6, 9, 5, 3];
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
})();
