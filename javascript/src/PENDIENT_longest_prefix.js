

/**
 * @param {string[]} strs
 * @return {string}
 */
    const longestCommonPrefix = (strs) => {
        if (strs.length === 0) {
            return '';
        }

        let ans = strs[0];
        console.log('ans 2', ans);

        for (let i = 1; i < strs.length; i++) {
            console.log('strs[i].indexOf(ans)', strs[i].indexOf(ans));
            while (strs[i].indexOf(ans) !== 0) {
                ans = ans.substring(0, ans.length - 1);
                console.log('ans', ans);
                if (ans === '') {
                    return '';
                }
            }
        }

        return ans;  
    };


var longestCommonPrefixOut = function (strs) {
    const strsLength = strs.length;
    
    const prefixBase1 = [];
    const prefixBase2 = [];
    const prefixBase3 = [];
    const prefixBase4 = [];
    const prefixBase5 = [];



    
    for (let index = 0; index < strsLength; index++) {
        const word = strs[index].toLowerCase(); 

        const prefixValue1 = word.subString(0, 1);

        const prefixValue2 = word.subString(0, 2);
        const prefixValue3 = word.subString(0, 3);
        const prefixValue4 = word.subString(0, 4);
        const prefixValue5 = word.subString(0, 5);


        
        
        // if (index === 0) {
        //     prefixBase = prefixValue;
        //     continue;
        // }

        // if (prefixBase !== prefixValue) {
        //     return false;
        // }
    }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
