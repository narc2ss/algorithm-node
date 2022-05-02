function solution(nums) {
  const kinds = new Set();

  for (let i = 0; i < nums.length; i++) {
    kinds.add(nums[i]);
  }

  const halfOfnums = nums.length / 2;

  return kinds.size >= halfOfnums ? halfOfnums : kinds.size;
}
