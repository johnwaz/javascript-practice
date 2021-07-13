let values = [2, 6, 4, 12, 8, 10];

function greatestValue(arr) {
  let bigVal = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bigVal) {
      bigVal = arr[i];
    }
  }
  return bigVal;
}

greatestValue(values); // Expected Output 12