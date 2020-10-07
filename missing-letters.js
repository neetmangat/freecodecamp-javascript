function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const splitSeq = str.split('');

  const startLetter = alphabet.indexOf(str[0]);
  const endLetter = startLetter + splitSeq.length + 1;
  const correctSequence = alphabet.slice(startLetter, endLetter)
  
  const missing = correctSequence.map((e) => {
    return splitSeq.includes(e)
  }).indexOf(false);

  return correctSequence[missing];
}

fearNotLetter("abce");
fearNotLetter("stvwx");