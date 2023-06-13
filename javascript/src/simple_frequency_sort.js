/*
In this kata, you will sort elements in an array by decreasing frequency of elements. 
If two elements have the same frequency, sort them by increasing value.
*/

// 5,9,6,9,6,5,9,9,4,4

const solve = array => {
    let groupedNumbers = [];
    let number;
    let numberInList;

    for (let i = 0; i < array.length; i++) {
        number = array[i];
        numberInList = groupedNumbers.find(x => x.number === number);

        if (!numberInList) {
            groupedNumbers.push({
                number,
                count: 1
            });

            continue;
        }
        
        numberInList.count += 1;
    }

    let result = []

    groupedNumbers.sort((a, b) => b.count - a.count).map(n => {
        const r = Array(n.count).fill(n.number);
        result = result.concat(r);
    });

    return result;
};

console.log(solve([2,3,5,3,7,9,5,3,7]));