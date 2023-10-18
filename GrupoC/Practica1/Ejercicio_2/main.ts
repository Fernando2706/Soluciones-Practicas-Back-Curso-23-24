const regexLetters = /[^a-zA-Z]/
const regexDigits = /\d+/g
const regexSpecialChar = /[^a-zA-Z0-9\s]/g

const checkSecurity = (str: string): number => {
  const chars = str.split("");

  let score = chars.length >= 20 ? 2 : chars.length <= 9 ? -1 : 0;
  
  if (
    chars.reduce((acc, currentValue) => {
      if (acc.length === 2) return acc;

      if (regexLetters.test(currentValue) && !regexLetters.test(acc))
        acc += currentValue;
      if (regexDigits.test(currentValue) && !regexDigits.test(acc))
        acc += currentValue;

      return acc;
    }, "").length === 2
  )
    score += 1;

  if (chars.some((value) => regexSpecialChar.test(value))) score += 1;

  if (
    chars.reduce((acc, currentValue, i) => {
      if (
        i < chars.length - 2 &&
        currentValue === chars[i + 1] &&
        currentValue === chars[i + 2]
      ) {
        return true;
      }
      return acc;
    }, false)
  )
    score -= 1;

  return score;
};

const pass = "Superr!ehgfhgt";
console.log(checkSecurity(pass));

export default checkSecurity;
