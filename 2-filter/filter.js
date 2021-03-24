const filter = (array, callback) => {
  let newArr = [];
  for(const item of array) {
    if( callback(item)) newArr = [...newArr, item];
  }
  return newArr;
}; 

module.exports = { filter };
