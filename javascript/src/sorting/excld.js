/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const numsLength = nums.length;

    if (numsLength <=0 || numsLength > 100) {
        throw new Error('nums is invalid!');
    }

    if (val <=0 || val > 100) {
        throw new Error('nums is invalid!');
    }

    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1)
    }
    
    return nums.length;
};



for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
}