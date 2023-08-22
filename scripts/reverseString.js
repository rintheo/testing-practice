const reverseString = (string) => string.split('').reduce((result, char) => char + result, '');

export default reverseString;
