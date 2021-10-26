const func = require('./index');

test('resut is 15', () => {
    const result = func([
        [0,1,1,1],
        [1,1,1,1],
        [0,1,1,1]
    ]);
    expect(result).toBe(15);
});

test('resut is 7', () => {
    const result = func([
        [1,0,1],
        [1,1,0],
        [1,1,0]
    ]);
    expect(result).toBe(7);
});