function func(n) {
    let a = 1;
    let e = 1;
    let i = 1;
    let o = 1;
    let u = 1;

    for(let x = 2; x <= n ; x++) {
        te = a+e;
        ti = a+e+i;
        to = a+e+i+o;
        tu = a+e+i+o+u;
        e = te;
        i = ti;
        o = to;
        u = tu;
    }
    return a+e+i+o+u;
}

module.exports = func;