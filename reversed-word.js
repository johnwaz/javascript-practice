let word = "Wasielewicz";
let reverse = "";

function reversedWord(str) {
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
}

reversedWord(word); // Expected Output: zciweleisaW