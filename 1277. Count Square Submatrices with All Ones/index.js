function func(matrix) {
    const dp = [];
    for(let i = 0 ; i < matrix.length ; i++) {
        dp[i] = [];
        for(let j = 0 ; j < matrix[0].length; j++) {
            dp[i][j] = 0;
        }
    }

    for(let i = 0 ; i < matrix.length; i++) {
        for(let j = 0 ; j < matrix[0].length; j++) {
            if(i ==0 && j == 0) {
                dp[i][j] = matrix[i][j];
                continue;
            }
            if(j==0 && i!=0) {
                dp[i][j] = dp[i-1][matrix[0].length-1] + matrix[i][j];
                continue;
            }
            const min = Math.min(i, j);
            let curr = matrix[i][j];
            if(curr === 0 ) {
                dp[i][j] = dp[i][j-1]
                continue;
            }
            for(let x = 1; x<= min; x++) {
                let flag = true;
                for(let l = i; l>= i-x; l--) {
                    if(!flag) break;
                    for(let r = j; r>=j-x; r--) {
                        if(matrix[l][r] === 0 ){
                            flag = false;
                            break;
                        }
                    }
                }
                if(flag) curr++;
            }
            dp[i][j] = dp[i][j-1] + curr;
        }
    }
    return dp[matrix.length-1][matrix[0].length -1];
}

module.exports = func;