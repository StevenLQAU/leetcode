function func(matrix) {
    const dp = [];
    for(let i = 0 ; i < matrix.length ; i++) {
        dp[i] = [];
        for(let j = 0 ; j < matrix[0].length; j++) {
            dp[i][j] = 0;
        }
    }

    dp[0] = [...matrix[0]];
    let result = dp[0].reduce((prev, curr)=> prev+curr,0);
    for(let i = 1 ; i < matrix.length; i ++) {
        dp[i][0] = matrix[i][0];
        result += dp[i][0];
    }
    
    for(let i = 1 ; i < matrix.length; i++) {
        for(let j = 1 ; j < matrix[0].length; j++) {
            let curr = matrix[i][j];
            if(curr === 0 ) {
                dp[i][j] = curr;
                continue;
            }
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + curr;
            result += dp[i][j]
        }
    }

    return result;
}

module.exports = func;