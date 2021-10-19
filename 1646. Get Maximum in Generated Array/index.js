function func(n) {
    const dp = new Array(n+1).fill(0);

    if(n === 0 ) return 0;
    if(n === 1) return 1;
    dp[0] = 0;
    dp[1] = 1;
    let max = 1;
    for(let i = 1; i< Math.ceil((n+1)/2); i++){
        dp[2*i] = dp[i];
        max = Math.max(max, dp[2*i])
        if(i * 2 + 1 > n) break;
        dp[2*i+1] = dp[i] + dp[i+1];
        max = Math.max(max, dp[2*i+1])
    }
    return max;
}

module.exports = func;