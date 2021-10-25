const func = require('./index');


test('resut is 6', () => {
    const result = func([-2,1,-3,4,-1,2,1,-5,4]);
    expect(result).toBe(6);
});

test('resut is 1', () => {
    const result = func([1]);
    expect(result).toBe(1);
});

test('resut is 23', () => {
    const result = func([5,4,-1,7,8]);
    expect(result).toBe(23);
});

test('resut is -1', () => {
    const result = func([-2,-1]);
    expect(result).toBe(-1);
});

test('resut is 21', () => {
    const result = func([8,-19,5,-4,20]);
    expect(result).toBe(21);
});