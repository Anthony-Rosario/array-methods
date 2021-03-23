const { map } = require('./map.js');

describe('function map', () => {
  it('should take an array and a callback and return a new mutated array', () => {
    expect(
      map([5, 10, 6, 16], (item) => {
        return item - 4;
      })
      ).toEqual([1, 6, 2, 12])
  });
}); 