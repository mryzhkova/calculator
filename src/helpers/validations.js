export const checkDots = (arr, value) => {
  const last = arr[arr.length - 1];
  if (value === '.' && last.includes('.'))
    return false;
  return true;
};

export const checkOperations = (operations, arr) => {
  const filterArr = arr.filter(e => e !== '');
  if (operations.some(o => o === filterArr[filterArr.length - 1]))
   return false;
  if(filterArr[filterArr.length - 1] === '.')
    return false;
  return true;
};
