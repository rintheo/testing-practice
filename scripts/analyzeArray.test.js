import analyzeArray from './analyzeArray';

test('Returns analysis from array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Returns analysis from an empty array', () => {
  expect(analyzeArray([])).toStrictEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test('Returns analysis from an array of length 1', () => {
  expect(analyzeArray([8])).toStrictEqual({
    average: 8,
    min: 8,
    max: 8,
    length: 1,
  });
});

test('Throws error when input is not an array of numbers', () => {
  expect(() => analyzeArray('dog')).toThrow();
});

test('Throws error when input array contains non-numeric data', () => {
  expect(() => analyzeArray([1, 2, 3, 'meow', 'meow', 'lol', 4, 5, 6])).toThrow();
});
