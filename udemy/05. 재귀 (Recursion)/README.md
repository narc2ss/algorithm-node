## 선수 학습

1. 빅오 표기법

---

## 재귀의 정의와 사용하는 이유

우선 재귀는 자기 자신을 호출하는 함수이며 재귀를 알아야 하는 이유는 다음과 같다.

재귀는 모든 곳에 사용된다.

- `JSON.parse` 와 `JSON.stringify`
- `document.getElementById` 와 DOM 순회 알고리즘
- 객체 순회
- 복잡한 데이터 구조
- 때로는 반복(iteration) 대신 재귀를 사용하는게 더 깔끔하다

---

## 스택 호출하기

재귀 함수가 자신 자신을 계속 호출하고 또 호출한다면, 보이지 않는 곳에서는 어떤 일이 일어날까?

오류가 생기지 않는 효과적인 재귀 코드를 작성하려면 다음을 이해하는게 중요하다.

- 거의 모든 프로그래밍 언어에는 보이지 않는 곳에서 함수 호출을 관리하는 일종의 데이터 구조가 있다.
- 자바스크립트에서는 이러한 데이터 구조를 호출 스택이라고 한다.

### 호출 스택 (Call Stack)

- 실제로는 스택(stack)이라는 데이터 구조이다
- 함수를 호출하면, 호출 스택의 꼭대기에 쌓인다(`push`)는게 전부이다.
- 자바스크립트가 반환 카워드를 확인하거나, 함수 안에 더 이상 실행할 코드가 없으면 컴파일러가 스택의 제일 위에 있는 함수를 제거(`pop`)할 것이다.

아마도 여러분은 함수가 완료되면 호출 스택 아래로 밀려나서 제거되는게 익숙할 것이다. 그러나 재귀 함수는 다르다.

재귀 함수는 계속해서 새로운 함수를 호출 스택에 추가할 것이다. 사실 동일한 함수를 계속 추가하는 거고, 추가된 함수는 호출을 기다린다.

`JSON.parse`를 예로 들자면, 자기자신을 계속 호출하기 때문에 호출 스택에 `JSON.parse`만 잔뜩 쌓여있는 걸로 보일 것이다. 하지만 어느 지점에서 반드시 종료가 될 것이다.

그런데 언제 종료되는지는 어떻게 알 수 있을까? 호출이 종료되지 않으면, 호출 스택이 영원히 실행되지 않을까?

---

## 첫 번째 재귀 함수

재귀의 기본적인 개념은 동일한 함수를 계속 호출하면서, 하나의 함수가 자기 자신을 재귀적으로 호출하게 하는 것이다.

하지만 중단점이 있어야 하는게 그것을 재귀 함수의 종료 조건이라고 부른다.

루프에 중단점이 있어야 하는 것처럼 말이다. 중단점이 없다면 영원히 실행되면서 컴퓨터에 악영향을 미칠 것이다.

재귀함수의 두 가지 기본요소

- 라인을 끝내는 종료 조건
- 다른 입력값

간단한 예시

```js
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

countDown(3);
// 3
// 2
// 1
// All done!
```

---

## 두 번째 재귀 함수

다음 코드를 보고 재귀함수의 기본요소를 찾아보자

```js
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

재귀가 종료가 되는 조건은 인자의 값이 1인 경우이며, 다른 입력값으로는 현재 인자 값에서 1을 뺀 값을 계혹 호출하고 있으므로 재귀함수라 볼 수 있다.

인자의 값이 3인 경우

1.  3 + sumRange(2) == 3
2.  2 + sumRange(1) == 1
3.  1 반환

순서로 작동되며, 결국 반환되는 값이 더해져 `sumRange(3)`의 값은 6이 된다.

호출 스택에는 3개의 함수가 쌓이고 실행 종료 후 제거 되었겠지만 숫자가 커지면 커질 수록 스택에 훨씬 더 많은 함수 호출이 쌓이기 때문에 조심해야 한다.

&#8594; 이전 함수 호출이 기다리던 값에 반환 값이 추가되고 나면 모든 함수를 거꾸로 합산한다.

---

## 반복문으로 팩토리얼 구현하기

재귀함수 사용법을 가장 고전적으로 설명하는 방법은 팩토리얼을 구현하는 것이다.

팩토리얼의 수식은 `!`이며, `4!`은 `4 * 3 * 2 * 1`과 같다

팩토리얼을 반복문으로 구현하면 다음과 같다.

```js
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(4)); // 24
```

---

## 재귀 호출로 팩토리얼 구현하기

함수를 정의하는 것 외에, 제일 먼저 해야 하는 일은 종료 조건과 재귀 호출이 사용되는 더 작은 부분을 모두 이해하는 것이다.

기본적으로, 반환값에는 두 가지의 서로 다른 구성요소가 있다.
`10!`은 `factorial(9)`에 `10`을 곱한 값이다. 따라서 다른 입력값은 `num * facorial(num - 1)`이 될 것이다.

팩토리얼은 곱셈의 결과이기 때문에 `0`까지 갈 필요가 없을 것이다. `factorial(1)`은 `1`이어야 하기 때문에 종료 조건은 `1`이 된다.

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4)); // 24
```

이것이 통상적으로 팩토리얼을 재귀로 구현하는 방법이다.

---

## 통상적인 재귀의 잠재적 위험

재귀함수를 작성하다 자주 발생하는 문제

- 종료 조건이 없거나 잘못되는 경우

  ```js
  function factorial(num) {
    // if (num === 1) return 1;
    return num * factorial(num - 1);
  }

  console.log(factorial(4)); // Uncaught RangeError: Maximun call stack size exceeded
  ```

- 잘못된 값을 반환하는 경우

  ```js
  function factorial(num) {
    if (num === 1) return 1;
    // return num * factorial(num - 1);
    return num * factorial(num);
  }

  console.log(factorial(4)); // Uncaught RangeError: Maximun call stack size exceeded
  ```

- 값을 반환하지 않는 경우

  ```js
  function factorial(num) {
    // if (num === 1) return 1;
    if (num === 1) console.log(num);
    return num * factorial(num - 1);
  }

  console.log(factorial(4)); // Uncaught RangeError: Maximun call stack size exceeded
  ```

호출 스택이라는 개념은 모든 항목이 서로에게 의존하면서 계속 기다리는 것이며 마지막에는 어떤 값을 도출해서, 그 값을 돌려보내야 한다.

재귀함수를 잘못 작성해서 마주치는 에러(`Uncaught RangeError: Maximun call stack size exceeded`)를 스택오버플로우(`Stack overflow`)라고 한다.

&#8594; 스택 오버플로우는 재귀가 멈추지 않는다는 의미이다.

---

## Helper 메소드 재귀

이제까지, 우리가 작성했던 모든 재귀함수는 팩토리얼처럼 단일 단독 함수(single standalone function)이었다.

헬퍼 메소드 재귀는 조금 다르다. 실제로 무언가를 하지는 않으며 일종의 패턴이다.

```js
function outer(input) {
  const outerScopedVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

헬퍼 메소드는 두 개의 함수를 가지고 있으며 외부함수와 외부 함수 내부에 재귀함수가 존재한다.

메인 외부함수는 개발자인 우리가 외부에서 호출한다.

우리는 외부함수를 호출해서 무언가를 내부로 전달할 수 있다. 그리고 외부함수 안에서는 또 다른 함수가 정의되어 있다.

그 함수는 호출이 되고, 재귀적으로 자기자신을 호출한다. 우리가 배열이나 테이터 목록 같은걸 컴파일 해야할 때 흔히 이렇게 작업한다.

어느 배열에서 모든 홀수값을 수집하는 것과 같은 직업을 수행해야 한다면 헬퍼 메소드 재귀를 사용하는것이 좋다.

```js
function collectOddValue(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValue([1, 2, 3, 4, 5])); // [1, 3, 5]
```

이렇게 사용하는 이유는 뭘까?

헬퍼 메소드 재귀의 외부함수 없이 내부에 배열을 선언하게 되면 배열이 초기화 되기 때문이다. 그렇다고 배열을 외부로 분리하게 된다면 의도치 않은 휴먼에러가 발생할 수 있다.

&#8594; 헬퍼 메소드 재귀는 재귀적이지 않은 외부함수가 재귀적인 내부 함수를 호출하는 패턴이다.

---

## 순수재귀

헬퍼 메소드 재귀가 한 가지 전략이기는 했지만 유일한 방법은 아니다. 순수 재귀를 사용해서 같은 작업을 수행할 수 있기 때문이다.

순수 재귀의 경우 필요한 모든 코드가 함수 자체에 포함되며 자귀적이다.

```js
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 === 1) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5])); // [1, 3, 5]
```

코드의 작동 방식을 자세히 살펴보면 약간의 차이가 있다.

우선 종료 조건은 `arr`의 길이가 `0`인 경우이며, 다른 입력값으로는 `arr`의 첫 번째 원소를 제외한 배열이다. &#8594; 재귀 함수의 두 가지 요소를 충족

결국 첫 번째 원소가 홀수인지를 판별한 후 판별한 원소를 제외한 배열을 재귀적으로 호출하며 arr의 길이가 0인경우 newArray를 반환하며 호출 스택에 쌓인 재귀 함수가 종료되면서 반복적으로 홀수가 담긴 배열을 합치게 되며 최종적으로 `[1, 3, 5]`가 출력이 되는 것이다.

### 순수 재귀 팁

- 배열을 사용하고 헬퍼 메소드 없이 순수 재귀를 작성하는 경우, 배열을 복사하는 `slice`, `spread 연산자`, `concat` 같은 메소드를 사용할 수 있다.
- 문자열은 변경할 수 없기 때문에 `slice`, `substr`을 사용하여 사본을 만들어야 한다.
- 객체의 경우 `Object.assign`이나 `spread 연산자`를 사용하는 것이 유용하다.
