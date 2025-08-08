// Vertical Sum of array -
// Write function which will take two inputs 1. Array of Object 2. Field name to calculate
// eg of array - [{name : "Mobile", price : 30000, qty : 20}, {name : "Laptop", price : 100000, qty : 2}, {name : "PC", price : 200000, qty : 20}]

function verticalSum(array, fieldName) {
    let sum = 0;

    for (let item of array) {
      if (item[fieldName] !== undefined && typeof item[fieldName] === "number") {
        sum += item[fieldName];
      }
    }
  
    return sum;
  }

  const products = [
    { name: "Mobile", price: 30000, qty: 20 },
    { name: "Laptop", price: 100000, qty: 2 },
    { name: "PC", price: 200000, qty: 20 }
  ];

  console.log("Total Price:", verticalSum(products, "price")); 
  console.log("Total Qty:", verticalSum(products, "qty")); 
  