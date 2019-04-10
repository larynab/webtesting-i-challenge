const { honest, add, repair } = require('./enhancer.js');
//arrange, act, assert

it.todo('repair item to 100');
it.todo('item success with enchancement');
it.todo('item enhancement failure consequence');

//test ADD
// test('add 2 and 2', function() {
//     //arrange
//     const expected = 4;
//     const value1 = 2;
//     const value2 = 2;
//     //act
//     const sum = add(value1, value2);
//     //assert
//     expect(sum).toEqual(expected)
// })

//ADD
// const sum = add(2, 2);
// console.log('The sum is:', sum);
it('should calculate the sum of any number of arguments separated by comma', () => {
  expect(add(1, 2, 3)).toBe(6);
  expect(add(1, 2, 3, 4)).toBe(10);
});

it('should add 2 numbers', () => {
    expect(add(2, 2)).toBe(4);
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 2)).toBe(1);
    expect(add(0, 0)).toBe(0);
})


//HONEST
describe('honest function', () => {
    test('an honest function should always tell the truth', () => {
      expect(honest()).toBeTruthy();
    });
  });
  
 