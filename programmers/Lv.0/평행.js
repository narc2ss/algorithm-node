function getSlope(point1, point2) {
  return (point2[1] - point1[1]) / (point2[0] - point1[0]);
}
function solution(dots) {
  if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) return 1;
  if (getSlope(dots[1], dots[0]) === getSlope(dots[2], dots[3])) return 1;
  if (getSlope(dots[0], dots[1]) === getSlope(dots[3], dots[2])) return 1;
  if (getSlope(dots[1], dots[0]) === getSlope(dots[3], dots[2])) return 1;

  if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) return 1;
  if (getSlope(dots[2], dots[0]) === getSlope(dots[1], dots[3])) return 1;
  if (getSlope(dots[0], dots[2]) === getSlope(dots[3], dots[1])) return 1;
  if (getSlope(dots[2], dots[0]) === getSlope(dots[3], dots[1])) return 1;

  if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) return 1;
  if (getSlope(dots[3], dots[0]) === getSlope(dots[1], dots[2])) return 1;
  if (getSlope(dots[0], dots[3]) === getSlope(dots[2], dots[1])) return 1;
  if (getSlope(dots[3], dots[0]) === getSlope(dots[2], dots[1])) return 1;

  return 0;
}
