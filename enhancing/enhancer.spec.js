const { honest } = require('./enhancer.js');
// test away!
//arrange
//act
//assert
describe('honest function', () => {
    // test case
    test('an honest function should always tell the truth', () => {
      expect(honest()).toBeTruthy();
    });
  });
  
 