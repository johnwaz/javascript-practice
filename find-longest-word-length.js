function findLongestWordLength(str) {
  let arr = str.split(" ");
  let highVal = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > highVal) {
      highVal = arr[i].length;
    }
  }
  return highVal;
}

findLongestWordLength("Over the hills and far away"); // Expected Output: 5