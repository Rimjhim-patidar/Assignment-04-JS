function getExt(fileName) {
    if (!fileName || typeof fileName !== 'string') return null;
    const lastDot = fileName.lastIndexOf('.');
    if (lastDot === -1 || lastDot === 0 || fileName.lastIndexOf('/') > lastDot) {
      return null;
    }

    return fileName.slice(lastDot + 1);
  }
  console.log(getExt("C:/abc.jpg"));      

  