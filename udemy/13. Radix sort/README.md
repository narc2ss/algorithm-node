## pre-learning

1. Big O
2. Bubble sort
3. Selection sort
4. Insertion sort
5. Merge sort

---

## Radix sort

- Radix sort is a special sorting algorithm that work on lists of numbers
- It never makes comparisons between emelents
- It exploits the fact that information about the size of a number is encoded in the number of digits
- More digits means a bigger number

### Radix sort: helper method

In order to implement radix sort, is's helpful to build a few helper functions first

getDigit(num, place) - returns the digit in num at the given place value

```js
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
```

digitCount(num) - returns the number of digits in num

```js
function getCount(num) {
  return String(Math.abs(num)).length;
}

getDigit(1); // 1
getDigit(0); // 1
getDigit(12); // 2
getDigit(134); // 3
getDigit(-134); // 3
```

mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list

```js
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

mostDigits([1234, 56, 8]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2
```

---

## Radix sort Pseudocode

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop form k = 0 up to this largest number of digits
  - Create buckets for each digit (0 to 9)
  - place each number in the crresponding bucket based on its kth digit
- Replace out sxisting array with values in our buckets, starting with 0 and going up to 9
- return list at the end
