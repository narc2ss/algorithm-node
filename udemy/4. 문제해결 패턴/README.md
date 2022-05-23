## 선수학습

1. 빅오표기법
2. 문제 해결 접근법

---

## 빈도수 세기 패턴 (Frequency Counter)

자바스크립트의 객체를 사용해서 다양한 값과 빈도를 수집하는 것

[EX] 2개의 배열을 허용하는 same이라는 함수를 작성하시오. 두 번째 배열이 첫 번째 배열의 제곱수를 가지면 참을 반환해야 한다.

```jsx
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false
```

```jsx
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
};
```

이러한 접근법은 O(N^2)시간이 사용되기 때문에 순진한 접근법이라 불린다.

`indexOf` 의 기능은 전체 배열을 반복하거나 중첩된 루프인 전체 배열을 잠재적으로 반복하는 것이다.

빈도수를 저장할 객체를 통해 배열의 각 요소가 해당 key에서 몇 번 나타나는지 알 수 있으며, O(N)시간으로 줄일 수 있다.

```jsx
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};
```

---

## 빈도수 세기 : 애너그램 도전 과제

두 단어를 입력받고 애너그램 관계인지 파악하는 코드를 작성

내가 시도한 코드

```js
function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  const frequencyStr1 = {};
  const frequencyStr2 = {};

  for (const el of string1) {
    frequencyStr1[el] = (frequencyStr1[el] || 0) + 1;
  }
  for (const el of string2) {
    frequencyStr2[el] = (frequencyStr2[el] || 0) + 1;
  }

  for (const key in frequencyStr1) {
    if (!(key in frequencyStr2)) return false;
    if (frequencyStr1[key] !== frequencyStr2[key]) return false;
  }

  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
```

**&#8594; 여러 데이터가 있어서 서로 비교를 해야 하는 경우 Frequency Counter 패턴을 사용하여 해결할 수 있다.**

---

## 다중 포인터 패턴 (Multiple Pointers)

인덱스나 위치에 해당하는 포인터나 값을 만든다음 특정 조건에 따라 중간 지점에서부터 시작지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것이다.

배열이나 문자열과 같은 일종의 선형 구조나 이중 연결리스트 또는 단일 연결 리스트를 만드는 것이다.

한 쌍의 값이나 조건을 충족시키는 무언가를 찾는다는 것이 중요하다.

[EX] 정수의 **정렬된** 배열을 받아들이는 sumZero라는 함수를 작성하십시오. 함수는 합계가 0인 첫 번째 쌍을 찾아야 합니다. 합계가 0이거나 쌍이 존재하지 않는 경우 `undefined` 또는 두 값을 모두 포함하는 배열을 반환합니다.

```js
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); // [-3, 3]
```

이 코드는 합계가 0이 되는 값이 없다면 1만큼 이동하여 다른 모든 숫자와 비교하고 이 작업을 계속 진행한다. 첫 번째 루프에서 -4와 일치하는 값이 없다는 것을 알아내기 위해 많은 작업을 수행해야 한다.

따라서 다중 포인터 패턴으로 리팩토링을 수행할 수 있다.

포인터를 시작과 끝으로 두고 합산한 값이 0이라면 한 쌍의 값이 담긴 배열을 반환하고 음수라면 시작 포인터를 증가시키고 양수라면 끝 포인터를 감소시킨다.

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]); // [-3, 3]
```

---

## 다중 포인터 : 고유값을 세는 도전 과제

[EX] 정렬된 배열을 받아들이고 배열의 고유한 값을 계산하는 countUniqueValues라는 함수를 구현합니다. 배열에 음수가 있을 수 있지만 항상 정렬됩니다.

내가 시도한 코드

```js
function countUniqueValues(arr) {
  const result = [];

  for (const el of arr) {
    if (result[result.length - 1] !== el) result.push(el);
  }

  return result.length;
}
```

강의 솔루션

```js
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

---

## 기준점 간 이동 패턴 (Sliding window)

이 패턴은 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용하다.

[EX] 정수가 담긴 비열과 정수 한 개를 받는 maxSubarraySum이라는 함수를 작성하세요. 함수는 배열에서 n개의 요소를 더한 최대 값을 출력해야 합니다.

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
```

내가 시도한 코드

```js
const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let max = -1;
  for (let i = 0; i <= arr.length - n; i++) {
    let temp = 0;
    for (let j = i; j < i + n; j++) {
      temp += arr[j];
    }

    if (temp > max) max = temp;
  }

  return max;
};
```

강의 솔루션

```js
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

이 코드는 순진한 접근법이며 O(N^2) 시간을 가진다.

슬라이딩 윈도우 패턴을 적용하면 O(N)시간으로 해결할 수 있다.

우선 배열 시작 요소부터 n까지의 요소의 합을 최대값으로 설정한 후 배열의 n번부터 n개의 합을 구한다 단, 인덱스 값을 증가할때 n개의 합을 새로 연산하는것이 아니라 다음 요소를 더하고 마지막 요소를 빼며 진행한다.

```js
const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let max = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];

    if (temp > max) max = temp;
  }

  return max;
};
```
