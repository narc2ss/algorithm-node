function solution(n, arr1, arr2) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    let binary = Number(arr1[i] | arr2[i])
      .toString(2)
      .split("");
    while (binary.length != n) {
      binary.unshift("0");
    }

    for (let j = 0; j < n; j++) {
      binary[j] === "1" ? (binary[j] = "#") : (binary[j] = " ");
    }
    arr.push(binary.join(""));
  }

  return arr;
}
