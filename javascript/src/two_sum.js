
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums, target) => {
    let numb1;
    let numb2;

    for (let i = 0; i < nums.length; i++) {
        numb1 = nums[i];

        if (typeof numb1 !== 'number' || !Number.isInteger(numb1)) {
            continue;
        }
        
        for (let j = 1 + i; j < nums.length; j++) {
            numb2 = nums[j];
            
            if (typeof numb2 !== 'number' || !Number.isInteger(numb2)) {
                continue;
            }
        
            if (numb1 + numb2 === target) {
                return [i, j];
            }
        }

    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3, 3], 6));