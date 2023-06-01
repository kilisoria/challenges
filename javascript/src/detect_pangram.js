/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// 26 letters

const ALPHABET_LETTERS = 26;

const isPangram = phrase => {
    let letter;
    const lettersFound = [];
    const letters = phrase.trim().split("");

    for (let i = 0; i < letters.length; i++) {
        letter = letters[i];
        
        if (letter.match(/[a-z]/i)) {
            letter = letter.toLowerCase();

            if (lettersFound.indexOf(letter) === -1) {
                lettersFound.push(letter);
            }
        }
    }

    console.log('lettersFound', lettersFound);

    return lettersFound.length === ALPHABET_LETTERS;
}


/*

THE BEST

  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });

*/

console.log(isPangram("The quick brown fox jumps over the lazy dog."));