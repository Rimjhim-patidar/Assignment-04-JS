function addArr(num) {
    let sum = 0;
  
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
  
    return sum;
  }
  const myNumbers = [10, 50, 20, 70];
  const total = addArr(myNumbers);
  console.log("Total Sum:", total);
    