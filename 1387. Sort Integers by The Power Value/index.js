function func(lo, hi, k){
    let result = {};
    for(let i = lo; i <= hi; i++) {
      result[i] = count(i);
    }
    return parseInt(Object.keys(result).sort((a, b) => result[a] - result[b])[k - 1], 10); 
}

function count(val){
    let result = 0;
    while (val !== 1) {
        if (val % 2 == 0) {
            val = val / 2;
        } else {
            val = 3 * val + 1;
        }
        result++;
    }

    return result;
}

module.exports = func;