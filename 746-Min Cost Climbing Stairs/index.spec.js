const func = require('./index');

test('resut is 15', () => {
    const result = func([10,15,20]);
    expect(result).toBe(15);
});

test('resut is 6', () => {
    const result = func([1,100,1,1,1,100,1,1,100,1]);
    expect(result).toBe(6);
});

test('resut is 1', () => {
    const result = func([0,0,1,1]);
    expect(result).toBe(1);
});