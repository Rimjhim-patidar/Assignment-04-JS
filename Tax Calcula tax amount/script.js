//Tax Calculator
//Write function which will take 2 params (1. Input Amount, 2. Tax %) and return object having tax amount and sum of tax and amount in js

function calculateTax(amount, taxPercent) {

    let taxAmount = (amount * taxPercent) / 100;

    let totalAmount = amount + taxAmount;

    return {
        taxAmount: taxAmount,
        totalAmount: totalAmount
    };
}

let result = calculateTax(1000, 18);
console.log(result);

