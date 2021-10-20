const func = require('./index');

test('resut is true', () => {
    const result = func("abc", "ahbgdc");
    expect(result).toBe(true);
});

test('resut is false', () => {
    const result = func("axc", "ahbgdc");
    expect(result).toBe(false);
});

test('resut is false', () => {
    const result = func("aec", "abcde");
    expect(result).toBe(false);
});

test('resut is true', () => {
    const result = func("", "");
    expect(result).toBe(true);
});

test('resut is true', () => {
    const result = func("", "abcde");
    expect(result).toBe(true);
});