import reverseString from './reverseString';

test('Returns reversed string. (1)', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Returns reversed string. (2)', () => {
  expect(reverseString('The quick brown fox')).toBe('xof nworb kciuq ehT');
});

test('Returns reversed string. (3)', () => {
  expect(reverseString('Meow Meow LoL')).toBe('LoL woeM woeM');
});
