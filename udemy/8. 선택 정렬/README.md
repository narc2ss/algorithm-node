## 선수 학습

1. 빅오 표기법
2. 버블 정렬

---

## 선택 정렬 : 소개

선택정렬은 배열에서 위치할 인덱스를 기억하고 가장 작은 값의 위치와 교환하는 방식이다.

의사 코드

1. 배열의 첫 번째 원소를 최솟값으로 가정하여 변수를 선언
2. 최솟값을 찾을 때 까지 배열을 순회
3. 최솟값을 찾는다면 값과 위치를 저장
4. 처음 저장한 값이 최솟값이 아니라면 두 값을 교환
5. 다음 원소에 대하여 배열이 끝날때 까지 반복

### 내가 시도한 코드

```js
function selectionSort(arr) {
  let min, temp, index;

  for (let i = 0; i < arr.length; i++) {
    min = Infinity;

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
  return arr;
}

selectionSort([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
```

---

## 선택 정렬 : 구현

```js
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

selectionSort([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
```
