function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(30); /* Expected Output: 1
                                  2
                                  Fizz
                                  4
                                  Buzz
                                  Fizz
                                  7
                                  8
                                  Fizz
                                  Buzz
                                  11
                                  Fizz
                                  13
                                  14
                                  Fizz Buzz
                                  16
                                  17
                                  Fizz
                                  19
                                  Buzz
                                  Fizz
                                  22
                                  23
                                  Fizz
                                  Buzz
                                  26
                                  Fizz
                                  28
                                  29
                                  Fizz Buzz */