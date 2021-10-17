function func(arr) {
    arr.push(0);
    const dp = new Array(arr.length).fill(0);
    dp[0] = 0;
    dp[1] = 0;
    for(let i = 2 ; i < arr.length; i++) {
        dp[i] = Math.min((dp[i-2] + arr[i-2]), (dp[i-1] + arr[i-1]));
    }

    return dp[arr.length-1];
}

module.exports = func;