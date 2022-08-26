## 선수 학습

### 필수

1. 빅오 표기법
2. 재귀

### 권장

1. 버블 정렬
2. 선택 정렬
3. 삽입 정렬
4. 합병 정렬

---

## 퀵 정렬 소개

- 합병 정렬과 같이 배열에 0개 또는 1개의 항목이 남을 때까지 분할하여 개별적으로 정렬되는 방식이다
- 피벗 포인트라 부르는 단일 요소를 선택하여 수행한다
- 그 후 해당 숫자보다 작은 숫자를 왼쪽으로 옮기고 큰 숫자는 오른쪽으로 옮긴다
- 이 과정을 완쪽과 오른쪽에 반복한다

코드는 간단하지만 개념적인 부분이 많다.

---

## 피벗 helper 소개

- 구현했던 합병 정렬에서 합병 헬퍼를 먼저 한 것과 같이 퀵 정렬의 첫 번째 부분을 작성할 것이다.
- 배열이 주어지면 요소를 피벗 포인트로 지정하여 배열 속 요소를 재배치 하는 함수를 작성한다.
- 그 다음 피벗보다 작은 모든 값이 피벗의 왼쪽으로 이동하고 피벗보다 큰 모든 값이 피벗의 오른쪽으로 이동하도록 배열의 요소를 재정렬 해야한다.
- 피벗옆에 있는 요소들의 순서는 중요하지 않다.
- 헬퍼가 새 배열을 만들지 않도록, 제자리에서 수행해야 한다.
- 수행을 마치면, 피벗 인덱스를 반환해야 한다.

### 피벗 선택

- 퀵 정렬의 시간은 피벗 선택위치에 따라 달라질 수 있다.
- 이상적으로는 데이터 집합의 중간 값이 되도록 선택해야 한다. &#8594; 하지만 쉽지않다
- 편의상 해당 챕터에서는 항상 첫 번째 요소를 피벗으로 선택하려고 한다.

### 의사 코드

- 이 함수는 배열, 시작 인덱스, 끝 인덱스라는 세게의 인자를 받는다.
- 배열의 첫 번째 요소를 피벗으로 지정한다.
- 시작 인덱스를 변수로 지정한다.
- 시작 + 1 부터 끝까지 배열에 루프를 수행한다.
  - 살펴보는 요소가 피벗보다 작은 경우 시작 인덱스를 증가시킨 다음 현재 요소와 피벗 인덱스의 요소를 교환한다.
- 시작했던 피벗과 피벗 인덱스를 바꾼 다음 피벗 인덱스를 반환한다.

&#8594; 순서에 상관없이 피벗을 기준으로 왼쪽 요소들은 피벗보다 작아야하고 오른쪽 요소들은 피벗보다 커야한다.

---

## 피봇 helper함수 구현

```js
function pivot(arr, start = 0, end = arr.length + 1) {
  let swapIndex = start;
  let pivot = arr[start];
  let temp;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      temp = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = temp;
    }
  }
  temp = arr[start];
  arr[start] = arr[swapIndex];
  arr[swapIndex] = temp;
  return swapIndex;
}
pivot([4, 8, 2, 1, 5, 7, 6, 3]); // [ 3, 2, 1, 4, 5, 7, 6, 8 ]
```

&#8594; `pivot`함수를 수행하면 피벗은 자신의 위치에 존재하게 되고 피벗을 기준으로 순서와 상관없이 왼쪽은 작은값, 오른쪽은 큰값이 존재하게 된다

---

## Quicksort implemented

### Quicksort Pseudocode

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Your base case occurs when you consider a subarray with less than 2 elements

```js
function pivot(arr, start = 0, right = arr.length + 1) {
  let pivot = arr[start],
    swapIndex = start,
    temp;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      temp = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = temp;
    }
  }

  temp = arr[swapIndex];
  arr[swapIndex] = arr[start];
  arr[start] = temp;
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 5, 7, 8, 3, 2, 1, 6]); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

---

## Big O of Quicksort

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O(n^2)                  | O(log n)         |

### Best Case

```json
[8, 5, 6, 1, 3, 7, 2, 4, 12, 13, 14, 11, 9, 15, 10]

pivot: 8
[4, 5, 6, 1, 3, 7, 2] [12, 13, 14, 11, 9, 15, 10]

pivot: 4, 12
[2, 1, 3] [6, 7, 5] [10, 11, 9] [14, 15, 13]

pivot: 2, 6, 10, 14
1 3 5 7 9 11 13 15
```

O(log n) decompositions \* O(n) comparisions per decomposition
&#8594; O(n log n)

### Worst Case

```json
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

pivot: 1
[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

pivot: 2
[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]]

(...)

pivot: 13
[14, 15]

pivot: 14
[15]
```

O(n) decompositions \* O(n) comparisions per decompositions &#8594; O(n^2)
