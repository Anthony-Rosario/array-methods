const map = (array, callback) => {
  let newArr = [];
  for(const item of array) {
    const newItem = callback(item);
    newArr = [...newArr, newItem];
  }
  return newArr;
}

module.exports = { map };