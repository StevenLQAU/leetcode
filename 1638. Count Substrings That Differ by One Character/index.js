function func(s, t) {
    // make sure length of s <= length of t
    if(s.length > t.length) {
        [s, t] = [t, s];
    }
    const min = Math.min(s.length, t.length);
    const dp = new Array(s.length);
    for(let i = 0; i < s.length ; i++) {
        dp[i] = new Array(t.length);  ;
        for(let j = 0 ; j< t.length; j++) {
            dp[i][j] = new Array(min).fill(0);
        }
    }
    let total = 0 ;

    for(let i = 0; i < s.length ; i++ ){
        for(let j = 0 ; j < t.length; j++) {
            for(let k = 0 ; k < Math.min(s.length-i, t.length-j) ; k++) {
                if(k === 0) {
                    dp[i][j][k] = s[i] === t[j] ? 0 : 1;
                    total += dp[i][j][k]
                    continue;
                }
                const result = dp[i][j][k-1] + (s[i+k] === t[j+k] ? 0 : 1);
                if(result < 2) {
                    total+=result;
                    dp[i][j][k] = result;
                }else {
                    break;
                }
            }
        }
    }
    return total;
}

module.exports = func;