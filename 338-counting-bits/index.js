function func(n) {
    const dp = Array(n+1).fill(-1)
    dp[0] = 0;
    if(n > 0){
        dp[1] = 1;
    };
    let power = 0;
    for(let i = 2 ; i<= n; i++) {
        if(Math.pow(2, power+1) === i){
            power++;
            dp[i] = 1;
        }
        dp[i] = 1 + dp[i-Math.pow(2, power)]
    }
    return dp;
}

module.exports = func;