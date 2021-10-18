function func(n) {
    if(n === 0) return [1];
    if(n === 1) return [1,1]

    let prev = [1,1];
    let curr;
    for(let i = 2; i<= n; i++) {
        curr = new Array(i+1).fill(-1);
        curr[0] = 1;
        curr[curr.length-1] = 1;
        for(let j =1 ; j < curr.length-1; j++){
            curr[j] = prev[j-1]+prev[j]
        }
        prev = curr;
    }
    return curr;
}

module.exports = func;