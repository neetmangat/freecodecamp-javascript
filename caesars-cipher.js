function rot13(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  function cipher(word) {
    return word .split('')
                .map(char => {
                  if (char.match(/[a-z]/)) {
                    let index = alphabet.indexOf(char)-13;
                    if (index < 0) {
                      index = 26 - Math.abs(index)
                    };
                    return alphabet[index];
                  } else {
                    return char;
                  }
                })
                .join('');
  }

 return str .toLowerCase()
            .split(' ')
            .map(word => {
              return cipher(word);
            })
            .join(' ')
            .toUpperCase();
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
