function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  console.log(capitalize("rimjhim")); 
  console.log(capitalize("JAVASCRIPT")); 
  