const func = require('./index');

// describe('test', () => {
//     it('should succeed', ()=>{
//         const result = func();
//         expect(result).toBe(1);
//     })
// })

test('resut is true', () => {
    const result = func(2);
    expect(result).toBe(true);
});

test('resut is false', () => {
    const result = func(3);
    expect(result).toBe(false);
});