const generateStrArr = (start, end) => {
  const arr = [];
  for (let i = start; i < end; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
};
const lowercaseLettersArr = generateStrArr(97, 123);
const uppercaseLettersArr = generateStrArr(65, 91);

const ceasarCipher = (text, key) => {
  const textArr = text.split("");
  const encryptedTextArr = textArr.map((letter) => {
    if (lowercaseLettersArr.includes(letter)) {
      const newIndex = (lowercaseLettersArr.indexOf(letter) + key) % 26;
      return lowercaseLettersArr[newIndex];
    } else if (uppercaseLettersArr.includes(letter)) {
      const newIndex = (uppercaseLettersArr.indexOf(letter) + key) % 26;
      return uppercaseLettersArr[newIndex];
    }
    return letter;
  });
  return encryptedTextArr.join("");
};

export { ceasarCipher };
