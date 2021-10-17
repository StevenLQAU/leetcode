function func(n) {
    const dp = Array(n+1).fill(-1)
    dp[0] = 0;
    if(n > 0){
        dp[1] = 1;
    };
    let count = 2;
    let currentCount = count;
    for(let i = 2 ; i<= n; i++) {
        if(currentCount === count) {
            dp[i] = 1
        }
        
        dp[i] = 1 + dp[i-count]
        if(--currentCount === 0) {
            count = count * 2;
            currentCount = count;
        }
    }
    return dp;
}

module.exports = func;