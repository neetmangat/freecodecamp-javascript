function palindrome(str) {
  function getArr(str) {
    return str.trim()
              .toLowerCase()
              .split('')
              .filter(e => { return e.match(/[a-z0-9]/) });
  }

  const forwardArr = getArr(str);
  const backwardArr = getArr(str).reverse();
  const answer = [];

  for (let i = 0; i < forwardArr.length; i++) {
      forwardArr[i] === backwardArr[i] 
      ? answer.push(true) 
      : answer.push(false);
  }

  return answer.every(e => e === true);
}



palindrome("not a palindrome");
palindrome("almostomla");
palindrome("A man, a plan, a canal. Panama");