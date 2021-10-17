const func = require('./index');

test('resut is 4', () => {
    const result = func(4);
    expect(result).toBe(4);
});

test('resut is 1389537', () => {
    const result = func(25);
    expect(result).toBe(1389537);
});