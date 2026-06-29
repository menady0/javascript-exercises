const removeFromArray = function (arr, ...items) {
  // arr.splice(arr.indexOf(element), 1);
  for (const element of items) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
};
//  0, 1, 2, 3
// [1, 2, 2, 3]
// Do not edit below this line
module.exports = removeFromArray;
