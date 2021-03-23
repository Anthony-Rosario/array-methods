const { filter } = require('./filter.js');

describe('function filter', () => {
  it('should take an array and a callback and returns a new array with the new callbacks to be true', () => {
    expect(
      filter([5, 10, 6, 16], (item) => {
        return item < 10;
      })
    ).toEqual([5, 6])
  });
});