function func(s) {
    if(s.lenght < 2) return 0;
    const left = {}; 
    const right = {};
    let leftCount = 0, rightCount = 0;
    let result = 0;
    for(let i = 0 ; i< s.length; i++) {
        if(!right[s[i]]) {
            right[s[i]] = 1;
            rightCount++;
        }else {
            right[s[i]]++;
        }
    }

    for(let i = 0; i<s.length -1 ; i++){
        if(!left[s[i]]) {
            left[s[i]] = 1;
            leftCount++;
        }else {
            left[s[i]]++;
        }

        right[s[i]]--;
        if(!right[s[i]]) {
            rightCount--
        }

        if(leftCount === rightCount) {
            result ++;
        }
    }
    return result;
}

module.exports = func;