function translatePigLatin(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
    const vowels = 'aeiou'.split('');

    const consCheck = consonants.includes(str[0]);
    const firstVowel = str  .split('')
                            .filter(e => vowels.includes(e))
                            .shift();

    let sliceIndex = 0;

    if (consCheck && firstVowel) {
        sliceIndex = str.split('').indexOf(firstVowel);
    }

    const beginning = str.slice(0, sliceIndex);
    const middle = str.slice(sliceIndex);

    return consCheck ? middle + beginning + 'ay' : str + 'way';
}

translatePigLatin("consonant");
translatePigLatin("rhythm");