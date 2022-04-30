let str = "ooz";

console.log(
  str
    .split("")
    .sort((a, b) => b < a)
    .join("")
);
