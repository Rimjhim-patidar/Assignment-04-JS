  function wordDensity(text, searchValue) {
    const words = text.trim().split(/\s+/);
    const totalWords = words.length;
  
    const regex = new RegExp(`\\b${searchValue}\\b`, 'gi');
    const matches = text.match(regex);
    const occurrenceCount = matches ? matches.length : 0;
  
    const density = (occurrenceCount / totalWords) * 100;
  
    return density.toFixed(2) + '%';
  }
  const myText = "My name is rimjhim patidar.";
  const result = wordDensity(myText, "rimjhim");
  console.log("Word Density:", result);
  