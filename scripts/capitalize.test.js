import capitalize from './capitalize.js';

test('Returns capitalized string (1)', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Returns capitalized string (2)', () => {
  expect(capitalize('there are many words')).toBe('There are many words');
});

test('Returns capitalized string (3)', () => {
  expect(capitalize('yOwHz')).toBe('YOwHz');
});
