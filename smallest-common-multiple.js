function smallestCommons(arr) {
  function sorter(a, b){
    return a - b;
  }

  function getFullArray(arr) {
    const sortedArr = arr.sort(sorter);

    const array = [];
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
      array.push(i);
    }

    return array;
  }

  function gcd(a, b) {
      return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
      return (a * b) / gcd(a, b);   
  }

  const fullArr = getFullArray(arr);
  let multiple = fullArr[0];

  fullArr.forEach(number => {
      multiple = lcm(multiple, number);
  });

  
  return multiple;
}


smallestCommons([1,5]);