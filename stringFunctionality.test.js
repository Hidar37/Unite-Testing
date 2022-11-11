const myStringLength = require('./stringFunctionality');
const stringFunction = new myStringLength();
// Test 1
test('return length of givin string: ', () => {
  expect(stringFunction.stringLength('Haider')).toBe(6);
});
// Test 2
test('return reversed string: ', () =>{
  expect(stringFunction.reversString('Haider')).toBe('rediaH');
}); 