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
