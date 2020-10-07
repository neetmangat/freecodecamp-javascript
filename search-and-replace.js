function myReplace(str, before, after) {
  const arr = str.split(' ');
  const replaceIndex = arr.indexOf(before);

  const capital = arr[replaceIndex][0].match(/^[A-Z]/);
  
  if (!capital) {
    arr[replaceIndex] = after.toLowerCase();
  } else {
    const capitalized = after[0].toUpperCase() + after.slice(1);
    arr[replaceIndex] = capitalized;
  }


  return arr.join(' ');
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
