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
- 배열 시작 부분에서 피벗을 선택한다.
- 피벗 인덱스를 변수로 지정한다.
- 시작 부터 끝까지 배열에 루프를 수행한다.
  - 살펴보는 요소가 피벗보다 클 경우 증가시킨 다음 현재 요소와 피벗 인덱스의 요소를 교환한다.
- 시작했던 피벗과 피벗 인덱스를 바꾼 다음 피벗 인덱스를 반환한다.

&#8594; 순서에 상관없이 피벗을 기준으로 왼쪽 요소들은 피벗보다 작아야하고 오른쪽 요소들은 피벗보다 커야한다.
