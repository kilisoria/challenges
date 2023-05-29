const lengthOfLastWord = (s) => {
    if (!s) {
        throw new Error('value is required!');
    }

    if (s.length < 0 || s.length > (Math.pow(10, 4))) {
         throw new Error('value is invalid!');
    }

    return s.trim().split(' ').slice(-1)[0].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
