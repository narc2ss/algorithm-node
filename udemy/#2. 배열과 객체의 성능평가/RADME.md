## 선수학습

1. 빅오 표기법

---

## 객체의 빅오

객체를 언제 사용하는가

- 데이터가 정렬되어 있을 필요가 없을 때
- 빠른 접근, 입력과 제거

### 객체의 빅오

- Insertion &#8594; O(1)
- Removal &#8594; O(1)
- Searching &#8594; O(n)
- Access &#8594; O(1)

자바스크립트는 객체에 어떤 정보를 상수 시간으로 저장할 수 있다는 것이다.

원하는 내용을 상수 시간안에 불러올 수도 있다.

어떤 값을 상수 시간안에 수정할 수도 있지만 그게 결국 어떤 값을 불러오는 작업과 똑같다.

제거 또한 마찬가지며 객체에는 시작과 끝이라는 개념은 존재하지 않는다. 단지 키를 사용하는 것이다.

> 나중에 해쉬 테이블과 맵에서 자세히 다룬다

그러나 탐색은 선형 시간이다.

```js
const instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumnbers: [1, 2, 3, 4],
};
```

객체의 값 중 `true` 인 프로퍼티의 키를 찾기 위해서는 객체의 모든 프로퍼티를 순회하며 값을 찾아야하기 때문이다.

### 객체 메서드의 빅오

- Object.keys &#8594; O(n)
- Object.values &#8594; O(n)
- Object.entries &#8594; O(n)
- Object.hasOwnProperty &#8594; O(1)

```js
Object.keys(instructor); // [ "firstName", "isInstructor", "favoriteNumbers" ]
Object.values(instructor); // [ "Kelly", true, [1, 2, 3,4] ]
Object.entiries(instructor);
// [["firstName", "Kelly"], ["isInstructor", true], ["favoriteNumbers", [1, 2, 3, 4]]]
Object.hasOwnProperty("firstName"); // true
```

`Object.keys`, `Object.values`, `Object.entries` 모두 O(n)으로 정리할 수 있다.

`Object.hasOwnProperty`는 키값을 전달받고 상수 시간으로 접근이 가능하며 같은 시간안에 속성이 존재하는지 여부를 판단할 수 있기 때문에 O(1)으로 정리할 수 있다.

&#8594; 객체는 모든것을 빨리 처리하지만 정렬되어있지 않다.

---

## 배열안의 데이터에 접근이 느린 이유

배열은 기본적으로 순서가 있고 요소마다 인덱스가 존재한다.

배열을 언제 사용하는가

- 정렬되어 있는 것이 필요할 때
- 빠르게 요소에 접근하기 위해서

### 배열의 빅오

- Insertion &#8594; It depends
- REmoval &#8594; It depends
- Searching &#8594; O(n)
- Access - O(1)

십입과 삭제는 때에 따라서 다른데 인덱스들 때문이다.

배열 끝에 요소를 삽입하는 겅우 배열 끝에 요소를 추가한 후 인덱스를 주면되기 때문에 O(1)이 소요된다. 삭제도 마찬가지다.

하지만 배열의 처음 또는 중간에 요소를 삽입/삭제하는 과정에서 다른 요소의 인덱스를 새로 배정해야하기 때문에 O(n)이 소요된다.

특정 요소에 접근할 때 배열의 길이는 중요하지 않으며 인덱스를 통해 O(1)로 접근할 수 있다.

### 배열 메서드의 빅오

모든 배열 메서드의 시간복잡도를 외울 필요는 없다.

- push &#8594; O(1)
- pop &#8594; O(1)
- shift &#8594; O(N)
- unshift &#8594; O(N)
- concat &#8594; O(N)
- slice &#8594; O(N)
- splice &#8594; O(N)
- sort &#8594; O(N \* logN)
- forEach/map/filter/reduce/etc. &#8594; O(N)

&#8594; 배열 메서드의 시간복잡도가 어떤 의미를 갖고 있고 어떻게 구했는지가 중요하다
