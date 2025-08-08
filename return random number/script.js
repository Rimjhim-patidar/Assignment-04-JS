// Write Function which will return random number with given digits
//	a. Input - digit (number)
//	b. Output - random number with given digit/s eg. if 2 digit is given random number should between 10-99

function randomNum(digits) {
    if (digits <= 0) {
      return null;
    }

    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(randomNum(1));
  console.log(randomNum(2));

  
