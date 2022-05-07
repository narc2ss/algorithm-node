function solution(new_id) {
  let arr = new_id.trim(".").split("");
  const specialSymbols = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "+",
    "[",
    "{",
    "]",
    "}",
    ":",
    "?",
    ",",
    "<",
    ">",
    "/",
  ];

  arr = arr.map((char) => char.toLowerCase());
  arr = arr.filter((char) => !specialSymbols.includes(char));

  let isDot = false;
  const arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "." && arr3[arr3.length - 1] === ".") continue;
    arr3.push(arr[i]);
  }
  arr = arr3;

  if (arr[0] === ".") arr.shift();
  if (arr[arr.length - 1 === "."]) arr.pop();

  if (arr.length === 0) arr.push("a");

  if (arr.length >= 16) arr = arr.slice(0, 15);
  if (arr[arr.length - 1] === ".") arr.pop();

  if (arr.length <= 2) {
    while (arr.length < 3) {
      arr.push(arr[arr.length - 1]);
    }
  }

  return arr.join("");
}
