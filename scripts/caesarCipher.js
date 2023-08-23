const caesarCipher = (plainString, key) => {
  const lowerCaseAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];

  const upperCaseAlphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];
  return plainString
    .split('')
    .reduce((result, char) => {
      if (char.toLowerCase() !== char.toUpperCase()) {
        let letters;
        if (char === char.toLowerCase()) letters = lowerCaseAlphabet;
        if (char === char.toUpperCase()) letters = upperCaseAlphabet;
        let index = (letters.indexOf(char) + key) % 26;
        if (index < 0) index += 26;
        return result + letters[index];
      }
      return result + char;
    }, '');
};

export default caesarCipher;
