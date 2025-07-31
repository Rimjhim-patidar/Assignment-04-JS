function parseValue(value) {
    const number = parseFloat(value);
  
    if (isNaN(number)) {
      return null; 
    }
    return Number.isInteger(number) ? parseInt(number) : number;
  }
  console.log(parseValue("26"));
  console.log(parseValue("26.5"));
  console.log(parseValue("rimjhim"));

    