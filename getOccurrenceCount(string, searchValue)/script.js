function getOccurrenceCount(str, searchValue) {
    if (!str || !searchValue) return 0;
    const regex = new RegExp(searchValue, 'gi');
    const matches = str.match(regex);
    
    return matches ? matches.length : 0;
  }
  console.log(getOccurrenceCount("This is JavaScript", "JavaScript")); 
  console.log(getOccurrenceCount("Hello hello Hello", "hello"));                              
  console.log(getOccurrenceCount("Hello world", "Hii"));                                      
  