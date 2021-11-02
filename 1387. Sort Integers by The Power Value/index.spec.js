const func = require('./index');

test('resut is 13', () => {
    const result = func(12, 15,2);
    expect(result).toBe(13);
});

test('resut is 1', () => {
    const result = func(1, 1,1);
    expect(result).toBe(1);
});

test('resut is 7', () => {
    const result = func(7, 11,4);
    expect(result).toBe(7);
});

test('resut is 570', () => {
    const result = func(1, 1000, 777);
    expect(result).toBe(570);
});