function func(n) {
    // const dp = Array(n+1).fill(false);
    // dp[2] = true;
    // for(let i = 3 ; i <= n; i++) {
    //     dp[i] = !dp[i-1];
    // }
    // return dp[n];

    //optimze
    if(n === 2) return true;
    let curr = false;
    let prev = true;
    for(let i = 3 ; i <= n; i++) {
        curr = !prev;
        prev = curr;
    }
    return curr;
}

module.exports = func;