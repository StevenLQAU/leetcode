const func = require('./index');

// describe('test', () => {
//     it('should succeed', ()=>{
//         const result = func();
//         expect(result).toBe(1);
//     })
// })

test('resut is 6', () => {
    const result = func('aba','baba');
    expect(result).toBe(6);
});