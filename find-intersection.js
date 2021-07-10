function findIntersection(strArr) {
  let intArr = [];
  let firstGroup = strArr[0].split(", ");
  let secondGroup = strArr[1].split(", ");
  for (let i = 0; i < firstGroup.length; i++) {
    if (secondGroup.includes(firstGroup[i])) {
      intArr.push(firstGroup[i]);
    }
  }

  if (intArr.length === 0) {
    return false;
  } else {
    return intArr.join(", ");
  }
}

findIntersection(["2, 4, 5, 10, 14", "2, 3, 4, 10, 16"]) // Expected Output: 2, 4, 10