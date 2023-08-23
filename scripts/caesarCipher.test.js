import caesarCipher from './caesarCipher';

test('Ciphers string', () => {
  expect(caesarCipher('hello world', 5)).toBe('mjqqt btwqi');
});

test("Ciphers string wraps before 'a' with a negative key", () => {
  expect(caesarCipher('za warudo', -1)).toBe('yz vzqtcn');
});

test("Ciphers string wraps multiple times before 'a' with a negative key", () => {
  expect(caesarCipher('the key is going backwardssss', -99)).toBe('ymj pjd nx ltnsl gfhpbfwixxxx');
});

test("Ciphers string wraps at after 'z' with a positive key", () => {
  expect(caesarCipher('zebra', 2)).toBe('bgdtc');
});

test("Ciphers string wraps multiple times after 'z' with a positive key", () => {
  expect(caesarCipher('the key is big', 99)).toBe('ocz fzt dn wdb');
});

test('Ciphers string keeps the same case', () => {
  expect(caesarCipher('Hello World', 7)).toBe('Olssv Dvysk');
});

test('Ciphers string ignores non alphabet characters', () => {
  expect(caesarCipher('there are 999 cats!', 15)).toBe('iwtgt pgt 999 rpih!');
});
