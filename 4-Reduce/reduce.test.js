const { reduce } = require('./reduce.js');

describe('function reduce', () => {
  const numbers = [1, 4, 6, 12]
  it('should take in an array of numbers and a callback and return the sum of the array', () => {
    const sum = (accumulator, item) => accumulator += item;

    expect(reduce(numbers, sum)).toEqual(23)
  });

  it('should have an initialValue for the accumulator', () => {
    const sum = (accumulator, item) => accumulator += item;
    const initialValue = 7;
    
    expect(reduce(numbers, sum, initialValue)).toEqual(30);
  });
});