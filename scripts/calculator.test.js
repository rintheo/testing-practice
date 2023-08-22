import calculator from './calculator';

test('Adds 2 numbers (1)', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Subtracts 2 numbers (1)', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Multiplies 2 numbers (1)', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('Divides 2 numbers (1)', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});
