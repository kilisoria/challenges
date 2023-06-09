/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

const findOdd = numbers => {
    let number;
    let numberInList; 
    let oddNumbersFiltered;

    const oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        number = numbers[i];
        numberInList = oddNumbers.find(n => n.number === number);

        if (!numberInList) {
            oddNumbers.push({
                number,
                count: 1
            });

            continue;
        }

        numberInList.count += 1;
    }

    oddNumbersFiltered = oddNumbers.map(n => {
        if (!(n.count % 2 === 0)) {
            return n;
        }
    });

    return oddNumbersFiltered.sort((a, b) => b.value - a.value).filter(n=> n);
}

/*
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
*/


console.log(findOdd([1, 1, 2]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));