const func = require('./index');

test('resut is 2', () => {
    const result = func(2);
    expect(result).toBe(2);
});

test('resut is 3', () => {
    const result = func(3);
    expect(result).toBe(3);
});

test('resut is 4', () => {
    const result = func(4);
    expect(result).toBe(5);
});