function isPrimeNumber(num) {
  if (num == 2) true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(nums) {
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const totalNum = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(totalNum)) cnt++;
      }
    }
  }

  return cnt;
}
