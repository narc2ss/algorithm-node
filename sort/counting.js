(() => {
  const count = new Array(5);
  const arr = [
    1, 3, 2, 4, 3, 2, 5, 3, 1, 2, 3, 4, 4, 3, 5, 1, 2, 3, 5, 2, 3, 1, 4, 3, 5,
    1, 2, 1, 1, 1,
  ];

  for (let i = 0; i < count.length; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - 1]++;
  }

  const result = [];
  for (let i = 0; i < count.length; i++) {
    if (count[i] != 0) {
      for (let j = 0; j < count[i]; j++) {
        result.push(i + 1);
      }
    }
  }

  console.log(result);
})();
