// Interest Calculator
// Write function which will take interest related input and return object having 1. Interest, 2. Sum of Interest and amount

function interestCalculator(principal, rate, time) {
    principal = parseFloat(principal);
    rate = parseFloat(rate);
    time = parseFloat(time);

    const interest = (principal * rate * time) / 100;

    const totalAmount = principal + interest;

    return {
      interest: interest,
      totalAmount: totalAmount
    };
  }
  
  console.log(interestCalculator(10000, 5, 2));

  