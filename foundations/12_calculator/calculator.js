const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return (arr.length !== 0) ? arr.reduce((total, current) => (total += current)) : 0;
};

const multiply = function (arr) {
  return (arr.length !== 0) ? arr.reduce((total, current) => (total *= current)) : 0;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent)
};

const factorial = function (num) {
  let total = 1;
  for(let i = 1; i <= num; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
