const func = require('./index');


test('resut is 3', () => {
    const result = func([2,5,3,4,1]);
    expect(result).toBe(3);
});

test('resut is 0', () => {
    const result = func([2,1,3]);
    expect(result).toBe(0);
});

test('resut is 3', () => {
    const result = func([1,2,3,4]);
    expect(result).toBe(4);
});