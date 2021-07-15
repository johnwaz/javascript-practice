function backAround(str) {
  let lastChar = str.substring(str.length -1);
  return lastChar + str + lastChar;
}

backAround("cool"); // Expected Output: lcooll