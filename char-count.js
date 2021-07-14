function charCount(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count += str[i].length;
  }
  return count;
}

charCount("characters"); // Expected Output: 10