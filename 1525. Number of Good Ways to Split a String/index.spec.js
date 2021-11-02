const func = require('./index');

// describe('test', () => {
//     it('should succeed', ()=>{
//         const result = func();
//         expect(result).toBe(1);
//     })
// })

test('resut is 1', () => {
    const result = func('abcd');
    expect(result).toBe(1);
});

test('resut is 2', () => {
    const result = func('acbadbaada');
    expect(result).toBe(2);
});

test('resut is 4', () => {
    const result = func('aaaaa');
    expect(result).toBe(4);
});