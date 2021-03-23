const { findIndex } = require('./findIndex.js');

describe('function findIndex', () => {
  it('takes an array and returns the index of the first item whose callback returns truthy', () => {
    expect(
      findIndex([5, 10, 6, 16], (item) => {
        return item[1];
      })
    ).toEqual([10])
  });
});