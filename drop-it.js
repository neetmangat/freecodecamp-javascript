function dropElements(arr, func) {
  const firstElement = arr.filter(e => func(e))[0]
  const indexToSlice = arr.indexOf(firstElement);

  return firstElement ? arr.slice(indexToSlice) : [];
}