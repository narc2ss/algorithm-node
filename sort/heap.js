(() => {
  const heap = [7, 6, 5, 8, 3, 5, 9, 1, 6];
  const number = 9;
  let temp;

  for (let i = 1; i < number; i++) {
    let c = i;
    do {
      let root = Math.floor((c - 1) / 2);
      if (heap[root] < heap[c]) {
        temp = heap[root];
        heap[root] = heap[c];
        heap[c] = temp;
      }
      c = root;
    } while (c != 0);
  }

  console.log(heap);

  for (let i = number - 1; i >= 0; i--) {
    temp = heap[0];
    heap[0] = heap[i];
    heap[i] = temp;
    let root = 0;
    let c;

    do {
      c = root * 2 + 1;
      if (heap[c] < heap[c + 1] && c < i - 1) {
        c++;
      }

      if (heap[root] < heap[c] && c < i) {
        temp = heap[root];
        heap[root] = heap[c];
        heap[c] = temp;
      }

      root = c;
    } while (c < i);
  }

  console.log(heap);
})();
