const sumAll = function (numA, numB) {
  if (
    Math.floor(numA) !== numA ||
    Math.floor(numB) !== numB ||
    numA < 0 ||
    numB < 0
  )
    return "ERROR";
  let large = numA >= numB ? numA : numB;
  let small = numA >= numB ? numB : numA;
  let sum = 0;
  for (let i = small; i <= large; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
