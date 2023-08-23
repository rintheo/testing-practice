const analyzeArray = (array) => {
  if (!Array.isArray(array)) throw new Error('Not an array!');
  return array
    .reduce((result, value) => {
      if (isNaN(value)) throw new Error(`${value} is not a number! Terminated.`);
      return {
        average: result.average + value / array.length,
        min: (value < result.min ? value : result.min) ?? value,
        max: (value > result.max ? value : result.max) ?? value,
        length: array.length,
      };
    }, {
      average: null,
      min: null,
      max: null,
      length: 0,
    });
};

export default analyzeArray;
