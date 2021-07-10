let word = "John";

function stringSplosion(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.substring(0, i + 1);
  }
  return result;
}

stringSplosion(word); // Expected Output: JJoJohJohn