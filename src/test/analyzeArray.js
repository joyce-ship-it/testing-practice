const analyzeArray = (arr) => {
  const length = arr.length;
  const sum = arr.reduce((acc, item) => acc + item);
  const average = sum / length;
  const copyArr = [...arr];
  copyArr.sort();
  const min = copyArr[0];
  const max = copyArr[length - 1];
  return { average, min, max, length };
};

export { analyzeArray };
