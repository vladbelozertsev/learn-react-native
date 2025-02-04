const prefixNumber = (prefix?: string) => {
  if (prefix === '7') return '7 (';
  if (prefix === '8') return '7 ('; // '8 ('
  if (prefix === '9') return '7 (9';
  return '7 (';
};

// https://codesandbox.io/s/ylvn0?file=/src/index.js:373-376
export const getPhoneMask = (phone: string) => {
  const withoutDigits = phone.replace(/\D+/g, '');
  const numberLength = 11;
  let result;

  if (phone.includes('+8') || phone[0] === '8') result = '+'; // ''
  else if (withoutDigits.length === 0) result = `+${prefixNumber()}`;
  else result = '+';

  for (let i = 0; i < withoutDigits.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(withoutDigits[i]);
        continue;
      case 4:
        result += ') ';
        break;
      case 7:
        result += '-';
        break;
      case 9:
        result += '-';
        break;
      default:
        break;
    }
    result += withoutDigits[i];
  }

  return result;
};
