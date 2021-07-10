let arrOne = [1, 3, 5];
let arrTwo = [2, 4, 6];
let result = [];

function zipArray(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    result.push(firstArr[i]);
    result.push(secondArr[i]);
  }
  return result;
}

zipArray(arrOne, arrTwo); // Expected Output: [ 1, 2, 3, 4, 5, 6 ]