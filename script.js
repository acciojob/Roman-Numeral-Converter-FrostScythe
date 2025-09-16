function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  if (num === 0) return ""; // Romans had no zero

  let result = "";

  while (num > 0) {
    // Subtractive rules
    if (num >= 900) { result += "CM"; num -= 900; }
    else if (num >= 400) { result += "CD"; num -= 400; }
    else if (num >= 90) { result += "XC"; num -= 90; }
    else if (num >= 40) { result += "XL"; num -= 40; }
    else if (num >= 9) { result += "IX"; num -= 9; }
    else if (num >= 4) { result += "IV"; num -= 4; }
    else {
      // Greedy approach using only your obj
      for (let i = 0; i <= 6; i++) {
        let [symbol, value] = obj[i];
        if (num >= value) {
          result += symbol;
          num -= value;
          break;
        }
      }
    }
  }

  return result;
}


// do not edit below this line
module.exports = convertToRoman;
