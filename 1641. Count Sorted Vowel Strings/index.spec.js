const func = require('./index');

test('resut is 5', () => {
    const result = func(1);
    expect(result).toBe(5);
});

test('resut is 15', () => {
    const result = func(2);
    expect(result).toBe(15);
});

test('resut is 66045', () => {
    const result = func(33);
    expect(result).toBe(66045);
});