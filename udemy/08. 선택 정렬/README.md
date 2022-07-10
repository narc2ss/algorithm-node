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

---

## 선택 정렬 : 빅오 복잡도

선택 정렬은 모든 요소를 배열 속 다른 요소 모두와 비교해야하기 때문에 효쥴적이지 않다.

그러니 배열 길이가 길어지면 비교 횟수도 n^2 비율로 늘어난다.

선택정렬이 잠재적으로 버블 정렬보다 나은 시나리오는 단 하나인데, 어떤 이유나 상황으로 여러분이 스왑 수를 최소화 하는 경우이다.

버블 정렬을 떠올려보자, 기본적으로 가장 큰 항목을 끝까지 가져갈 수 있도록 계속 바꾼다.

선택 정렬은 반복하여 많이 비교하지만, 각 루프가 끝날 때 한 번만 바꾼다.

그러니 어떤 이유로 메모리에 쓰는 것을 고려하거나, 실제 스왑을 수행하는 것을 고려하는 경우라면, 선택 정렬이 낫다
