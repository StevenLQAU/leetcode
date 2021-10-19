function func(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let prev2 = 1;
    let prev1 = 2;
    let result = 0;
    for(let i = 3 ; i <= n ; i++) {
        result = prev2 + prev1;
        prev2 = prev1;
        prev1 = result;
    }
    return result;
}

module.exports = func;