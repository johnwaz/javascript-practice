function frontBack(str) {
  let first = str.substring(0, 1);
  let last = str.substring(str.length -1);
  return last + str.substring(1, str.length -1) + first;
}

frontBack("kool"); // Expected Output: look