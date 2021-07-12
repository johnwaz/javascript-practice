function titleCase(str) {
  let newStr = str.split(" ");
  let result = []
  for (let i = 0; i < newStr.length; i++) {
    let firstLetter = newStr[i].substring(0, 1).toUpperCase();
    let rest = newStr[i].substring(1).toLowerCase();
    let word = firstLetter + rest;
    result.push(word);
  }
  return result.join(" ");
}

titleCase("whAt iS AnD wHaT sHoUlD NeVer bE"); // Expected Output: What Is And What Should Never Be