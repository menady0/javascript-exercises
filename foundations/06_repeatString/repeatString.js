const repeatString = function (word, num) {
  if (num < 0) return "ERROR";

  let repeated = "";
  for (let i = 1; i < num; i++) {
    repeated += word;
  }
  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
