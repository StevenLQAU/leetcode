function func(s,t) {
    if(s.length > t.length) return false;
    if(s.length === 0) return true;
    
    for(let i = 0, j = 0 ; j< t.length ;j++){
        const current = s[i] === t[j];
        if(current) i++;
        if(i === s.length) return true;
    }
    return false;
}

module.exports = func;