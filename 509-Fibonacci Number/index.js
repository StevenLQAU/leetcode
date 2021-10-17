function func(n) {
    // const dp = Array(n+1).fill(0);
    // dp[0]= 0;
    // dp[1] = 1
    // for(let i = 2; i<n+1 ; i++){
    //     dp[i] = dp[i-1]+ dp[i-2]
    // }
    // return dp[n];


    // optimize the memory usage;
    if(n === 0) return 0;
    if( n === 1) return 1;
    let prev2 = 0;
    let prev1 = 1;
    let result = 0;
    for(let i = 2; i<n+1 ; i++){
        result = prev1 + prev2;
        prev2 = prev1;
        prev1 = result;
    }
    return result;
}

module.exports = func;