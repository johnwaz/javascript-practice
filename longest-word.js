function longestWord(sentence) { 
  let regex = /[a-z0-9]+/ig;
  let newSentence = sentence.match(regex);
  let longWord = newSentence.sort(function(a, b) {
    return b.length - a.length;
  });
  return longWord[0];
}

longestWord("This is the sentence used for an example."); // Expected Output: sentence