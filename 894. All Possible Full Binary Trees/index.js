// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right){
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// the return value of test is list of TreeNodes, not array of value
function func(n) {
    if(n%2 === 0) {
        return [];
    }
    const dp = new Array(n+1);
    dp[1] = [new TreeNode()];
    for(let i = 3 ; i <= n ; i=i+2) {
        let a = i-1-1;
        for(let j = 1 ; j <= a ; j=j+2) {
            const c1 = dp[j];
            const c2 = dp[i-1-j];
            for(let x=0; x<c1.length; x++){
                for(let y=0; y<c2.length; y++) {
                    if(!dp[i]) dp[i] = [];
                    dp[i].push(new TreeNode(0, c1[x], c2[y]))
                }
            }
        }
    }
    return dp[n];
}

function getNodes(root) {
    const result = [];
    const queue = [root]
    while(queue.length) {
        const node = queue.shift();
        result.push(node.val);
        
        if(node.left) {
            queue.push(node.left);
        }else {
            result.push(null);
        }
        if(node.right) {
            queue.push(node.right);
        }else {
            result.push(null);
        }
    }

    return result;
}

module.exports = func;