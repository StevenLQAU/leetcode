const func = require('./index');

test('input is 2, resut is [0,1,1]', () => {
    const result = func(2);
    expect(result).toEqual([0,1,1]);
});

test('input is 5, resut is [0,1,1,2,1,2]', () => {
    const result = func(5);
    expect(result).toEqual([0,1,1,2,1,2]);
});