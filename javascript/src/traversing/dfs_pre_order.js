
 // Definition for a binary tree node.
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/** 
 * @return {number[]}
 */
const averageOfLevels = function(root) {
      let res = [];
      let obj = {};

    if (!root) return res;

    let i = 0
    
    const dfs = (node) => {
        if (!node) return;

        if (res[i] === undefined) {
            res[i] = node.val
            obj[i] = 1
        }
        else {
            res[i] = (res[i] + node.val)
            obj[i] = obj[i] + 1
        }
        i++
        dfs(node.left)
        dfs(node.right)
        i--
    }

    dfs(root);

    for (let j = 0; j < res.length; j++) {
        res[j] = res[j] / obj[`${j}`]
    }

    console.log('12345', res);
    return res;
};

console.log(averageOfLevels([3, 9, 20, null, null, 15, 7]));