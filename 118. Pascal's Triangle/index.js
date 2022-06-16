function func(n) {
    const dp = new Array(n);
    dp[0] = [1];
    if(n-1 > 0) dp[1] = [1,1];
    for(let i = 2; i< n; i++) {
        const curr = new Array(i+1);
        curr[0] = curr[curr.length-1] = 1;
        for(let j = 1 ; j< curr.length-1; j++){
            curr[j] = dp[i-1][j-1] + dp[i-1][j];
        }
        dp[i] = curr;
    }
    return dp;
}

module.exports = func;