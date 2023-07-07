/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

const SUFIX = 'ay'

const pigIt = (str) => {
  //Code here
    const parts = str.split(' ');
    const transformedWords = [];

  parts.forEach(element => {
    const elementLength = element.length;
      
    const firstLetter = element.at(0);
    const lastLetter = element.at(elementLength - 1);
    const restWord = element.substring(1, elementLength - 1);
        
    transformedWords.push(`${restWord}${lastLetter}${firstLetter}${SUFIX}`);
  });

  return transformedWords.toString().replaceAll(',', ' ');
}

console.log(pigIt('Pig latin is cool'));

// igPay atinlay siay oolcay
// OOOay emporatay oooay oresmay !!!ay
// Oay emporatay oay oresmay !
