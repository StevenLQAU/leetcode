function func(n) {
    // const dp = Array(n+1).fill(-1);
    // dp[0] = 0;
    // dp[1] = 1;
    // dp[2] = 1;
    // for(let i = 3; i<=n ; i++) {
    //     dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    // }
    // return dp[n];


    // optimize
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 1;
    let prev3 = 0;
    let prev2 = 1;
    let prev1 = 1;

    let result = -1;
    for(let i = 3; i<=n ; i++) {
        result = prev1 + prev2 + prev3;
        prev3 = prev2;
        prev2 = prev1;
        prev1 = result;
    }
    return result;
}

module.exports = func;