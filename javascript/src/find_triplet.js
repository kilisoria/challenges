
// - Write a function that returns a triplet of numbers from the supplied array, 
// with a sum equal to a specific integer.

const array = [4, 1, 9, 8, 5, 2, 3, 23, 50, 22, 19, 10];
const int = 35;

// console.log(find_triplet(array,int)) // [ 10, 22, 3 ]
// console.log(find_triplet(array,int)) // null

const find_triplet = (array, sumToCheck) => {
    array.sort((a,b) => a - b);
    const arrayLength = array.length; 
    let left, right;

    for (let index = 0; index < arrayLength - 2; index++) {        
        left = index + 1;
        right = arrayLength - 1;

        while (left < right) {
            const value = array[index];
            const leftValue = array[left];
            const rightValue = array[right];

            if (value + leftValue + rightValue === sumToCheck) {
                return [value, leftValue, rightValue];
            }
            else if (value + leftValue + rightValue < sumToCheck)
                left++;
            else
                right--;
        }
    }
 
    // Not found
    return [];
}

console.log(find_triplet(array, int));