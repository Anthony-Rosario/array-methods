const every = (array, callback) => {
  let result = true;
  for(const item of array) {
    if(!callback(item)) result = false;
  }
  return result;
}

module.exports = { every };