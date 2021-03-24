const { findIndex } = require('./findIndex.js');

describe('', () => {
  it('', () => {
    const fruits = ['apple', 'strawberry', 'banana', 'orange', 'blueberry'];
    expect(findIndex(fruits, (element) => element === 'banana')).toEqual(2)
    expect(findIndex(fruits, (element) => element === 'raspberry')).toEqual(-1)
  });
});