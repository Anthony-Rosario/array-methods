const { every } = require('./every.js');

describe('function every', () => {
  it('', () => {
    expect(
      every(['apple', 'strawberry', 'banana', 'orange'], item => {
        item.includes('w');
      })
    ).toEqual(false);
  });
});