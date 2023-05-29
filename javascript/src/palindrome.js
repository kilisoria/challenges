/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = number => {
    if (number < 0 || number > Math.pow(2, 31)) {
        return false;
    }

    const numbeReversed = number.toString().split("").reverse().join('');
    console.log(numbeReversed);

    return number === Number(numbeReversed);
};

console.log(isPalindrome(121121));