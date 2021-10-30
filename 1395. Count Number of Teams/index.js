function func(arr) {
    const ASCEND = 0;
    const DESCEND = 1;
    let result = 0;
    const dp = new Array(arr.length);
    for(let i = 0 ; i < arr.length; i++) {
        dp[i] = [0,0];
    }

    for(let i = 1 ; i< arr.length ; i++ ) {
        for(j = i-1; j >=0 ; j--) {
            if(arr[i] > arr[j]) {
                dp[i][ASCEND]++;
                result += dp[j][ASCEND];
            } else if(arr[i] === arr[j]){
                dp[i] = [...dp[i-1]];
            } else {
                dp[i][DESCEND] ++;
                result += dp[j][DESCEND];
            }
         }
    }
    return result;
}

module.exports = func;