## 빅오 표기법(Big O Notaion)의 필요성

어떤 한 문제를 해결하기위한 알고리즘은 여러개가 존재한다.

이러한 여러 해결법 중에서 최고를 어떻게 판별할까?

여러가지 알고리즘을 서로 비교하고 성능을 평가하는 방법이 있을 수 있다.

- 좋은 코드야
- 그저그런 코드야
- 엉망인 코드야

보다 빅오 표기법으로 코드의 성능을 숫자로 표기할 수 있다

"제대로 작동하기만 한다면 충분하지 않은가요? 가장 좋은게 무슨 상관 인가요? 떠오르는 해결책이 가장 중요하죠"

그러나 면접, 코드 챌린지, 큰 데이터셋을 다루는 기업에서 한 알고리즘이 다른 알고리즘보다 실행하는데 한시간이 더 빠르다면 성능이 중요할 것이다.

- 코드의 성능을 얘기할 때 정확한 전문용어를 사용하는 것이 중요하다.
- 서로 다른 접근법의 장단점을 얘기할 때 유용하다.
- 비효율적인 코드를 찾는데 도움이 된다.
- 면접을 잘 보기위해

**&#8594; 코드를 분류할 수 있다**

---

## 코드 시간재기

1부터 N까지의 합을 구하여라

```js
function addUpTo1(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo1(100)); // 5050
console.log(addUpTo2(100)); // 5050
```

`addUpTo1` 함수와 `addUpTo2` 함수는 정확히 같은 일을 한다. 둘 중 어떤 함수가 더 나은가

우선 답 해야 되는 것은 "더 나은" 것이 뭘 의미 하는가?

- 더 빠른가?
- 메모리를 더 적게 사용하는가
- 쉽게 읽을 수 있는가?

실행속도가 빠르면서 적은 메모리를 사용하며 읽기 쉬운코드가 좋은 코드지만 쉽지 않기 때문에 잘 조율하는 것이 중요하다.

우선 속도를 평가하는 것에 집중해보자.

내장 되어 있는 timing function을 사용하여 코드가 실행하는데 걸리는 시간을 구할 수 있다.

```js
function addUpTo1(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

const t1 = performance.now();
console.log(addUpTo1(1000000000));
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

const t3 = performance.now();
console.log(addUpTo2(1000000000));
const t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);

// 500000000067109000
// Time Elapsed: 0.9511725001335144 seconds.
// 500000000500000000
// Time Elapsed: 0.000029707908630371094 seconds.
```

`addUpTo1` 과 `addUpTo2` 는 똑같은 데이터를 다루지만 `addUpTo2` 함수가 더 짧은 시간안에 완료되었다.

하지만 이렇게 수동으로 시간을 구하고 서로 비교하는 것이 정확한 것은 아니다.

- 컴퓨터나 실행 환경에따라 다른 방식으로 시간을 기록한다.
- 똑같은 기계가 다른 시간을 측정할 수 있다.
- 빠른 알고리즘에서는 짧은 시간안에 모든 것이 처리된다.

이런 식의 시간을 측정하는 코드를 삽입하는 것이 나쁜것은 아니지만 어떤 게 더 빠른지 알기 위해서 테스트를 실행 하기는 번거롭다.

**&#8594; 이 방법 외에 더 좋은 방법이 있으면 더 좋을 것이다**

---

## 연산 갯수 세기

코드가 실행될때 걸리는 정확한 시간을 초로 측정하는것보다는 컴퓨터가 처리해야하는 연산 갯수를 세면 된다.

시간은 항상 컴퓨터의 연산 갯수에 달려있을 것이다.

```js
function addUpTo2(n) {
  return (n * (n + 1)) / 2; // 1 multiplication, 1 addition, 1 division
}
```

위 `addUpTo2` 함수는 `n` 이 크든 작든 `n` 값과 상관없이 연산이 3번 이루어진다.

```js
function addUpTo1(n) {
  let total = 0; // 1 assignment

  for (let i = 1; i <= n; i++) {
    // 1 assignment, n comparisons, n additions and  n assignments

    total += i; // n additions, n assignments
  }

  return total;
}
```

`addUpTo1` 함수에서 명확한 것은 5n + 2의 연산이 이루어진다.

사실 5n + 3인지, 3n이든지 정확한 숫자는 상관없다. 전체적인 추세를 보는 것이기 때문이다.

**&#8594; 빅오 표기법에서 중요한 것은 전체적인 큰 그림이다**

---

## 빅오에 대한 공식 소개

빅오는 대략적으로 숫자를 세는 것에 붙인 공식적인 표현이다.

정식으로 입력된 내용이 늘어날 수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는 공식적인 방식이다.

```js
function addUpTo2(n) {
  return (n * (n + 1)) / 2; // Always 3 operations => O(1)
}
```

```js
function addUpTo1(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    // Always n operations => o(n)
    total += i;
  }

  return total;
}
```

```js
function countUpAndDown(n) {
  for (let i = 1; i <= n; i++) {
    // O(n)
    console.log(i);
  }
  for (let j = n; i >= 0; j++) {
    // O(n)
    console.log(j);
  }

  // O(2n) => O(n)
}
```

```js
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    // O(n) operation iside of an O(n) operation
    for (let j = 0; j < j; j++) {
      // O(n^2)
      console.log(i, j);
    }
  }
}
```

**&#8594; 어떤 함수의 입력 값이 늘어나는 것과 입력의 크기와 실행시간의 관계**

---

## 빅오의 표현 단순화하기

이제 빅오를 표현할 때 정확한 연산 갯수는 중요하지 않고 전체적인 추세가 중요하다는 것을 알게 되었다.

이제 빅오 표현을 단순화 하기 위해서 도움이 될 규칙들에 대해 알아보자.

**상수는 중요하지 않다**

- O(2n) &#8594; O(n)
- O(500) &#8594; O(1)\*\*
- O(13n^2) &#8594; O(n^2)

**작은 연산들도 중요하지 않다**

- O(n + 10) &#8594; O(n)
- O(1000n + 50) &#8594; O(n)
- O(n^2 + 5n + 8) &#8594; O(n^2)

빅오 표현의 축약형

빅오의 복잡도를 분석할 때, 매우 복잡해진다 하지만 쉽게 적용할 수 있는 규칙이 있다. (항상 맞지는 않다)

1. 연산은 상수다
2. 변수 배정도 상수다.
3. 인덱스를 통해 배열의 요소에 접근하는 것은 상수다.
4. 루프가 있으면 복잡도는 루프 길이 곱하기 루프 안에 있는 연산이 된다.

## 공간 복잡도

지금까지는 입력이 커질수록 알고리즘들이 얼마나 실행 속도가 어떻게 바뀌는지 분석했다. 이것을 시간복잡도 라고 한다.

이제는 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지하는지에 대해서 다룬다.

공간에서 일어나는 현상을 표현하기위해 빅오 표기를할 수 있지만 사용되는 메모리에 주목해보자.

통상 공간복잡도는 입력값을 제외하고 **알고리즘 자체가 필요로 하는 공간**을 의미한다.

자바스크립트의 공간 복잡도

- boolean, number, undefined, null은 불변 공간이다.
- 문자열은 O(n)의 공간이 필요하다.
- object, array은 O(n) 공간이 필요하다.

```js
function sum(arr) {
  let total = 0; // one number
  for (let i = 0; i < arr.length; i++) {
    // another number
    total += arr[i];
  }
  return total;
}
```

입력의 크기가 차지하는 공간과는 아무 상관이 없다 두 변수 밖에 없기 때문이다.

배열의 길이에 따라서 새로운 변수를 더하는 것도 아니고 total 변수에 더할 뿐이다. 따라서 O(1)의 공간을 가지게 된다.

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr; // [2, 4, 6]
}
```

새로운 배열 변수를 선언하고 베열에 값을 추가하기 때문에 입력값에 비례해서 길어지기 때문에 O(n)의 공간을 가지게 된다

&#8594; 공간복잡도는 입력값의 크기와 상관없이 알고리즘이 실항하는데 필요로 하는 공간을 나타낸다.

---

## 로그와 섹션 요약

어떤 알고리즘들은

- O(1)
- O(n)
- O(n^2)

처럼 간단하지 않은 경우도 있다.

하지만 빅오 표기들중에 더 어렵거나 덜 흔한 수학 개념들이 포함되어 있을 수 있다.

그중 자주 나오는 개념이 로그개념이다.

로그함수는 지수함수의 역함이다.

나눗셈과 곱셈이 짝인것처럼 로그함수와 지수함수는 짝이다.

> 컴퓨터는 2진 체계이기 때문에 밑이 생략되었다면 2이다.

log8 = 3 &#8594; 2^3 = 8

O(log n)는 처음에 기울기가 가파르지만 서서히 완만해지며 O(n)처럼 다른 시간 복잡도보다 훨씬 좋다.

O(nlog n ) 그렇게 좋지는 않지만 O(n^2)보다는 좋다.

**&#8594; O(1) > O(log n) > O(n) > O(nlog n) > O(n^2)**
