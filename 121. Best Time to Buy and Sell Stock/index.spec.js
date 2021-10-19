const func = require('./index');

// describe('test', () => {
//     it('should succeed', ()=>{
//         const result = func();
//         expect(result).toBe(1);
//     })
// })

test('resut is 5', () => {
    const result = func([7,1,5,3,6,4]);
    expect(result).toBe(5);
});

test('resut is 0', () => {
    const result = func([7,6,4,3,1]);
    expect(result).toBe(0);
});