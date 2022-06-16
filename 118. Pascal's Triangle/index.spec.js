const func = require('./index');

// describe('test', () => {
//     it('should succeed', ()=>{
//         const result = func();
//         expect(result).toBe(1);
//     })
// })

test('resut is [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', () => {
    const result = func(5);
    expect(result).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
});

test('resut is [[1]]', () => {
    const result = func(1);
    expect(result).toEqual([[1]]);
});