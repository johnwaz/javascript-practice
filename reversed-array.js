function reversedArray(arr) {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      newArr.unshift(arr[i]);
    }
    return newArr;
  }
  
  reversedArray([1, 2, 3, 4]); // Expected Output: [ 4, 3, 2, 1 ]