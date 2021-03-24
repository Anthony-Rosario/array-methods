const { every } = require('./every.js');

describe('function every', () => {
  it('should take in an array and a callback and return true if the criteria is met and false if otherwise', () => {
    expect(
      every(['apple', 'strawberry', 'banana', 'orange'], item => {
        item.includes('w');
      })
    ).toEqual(false);
  });
});