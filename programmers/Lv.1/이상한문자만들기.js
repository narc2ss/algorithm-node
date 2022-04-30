function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, index) => (index % 2 ? char : char.toUpperCase()))
        .join("")
    )
    .join(" ");
}
