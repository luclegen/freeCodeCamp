function convertToRoman(num) {
  let arr = String(num).split(""), romanSymbols = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
  };
  const convert = n => {
    let a = [], u = Math.pow(10, String(n).length - 1);
    if (n % u === 0) {
      if (u >= 1000) for (let i = 0; i < n/1000; i++) {
        a.push(romanSymbols[1000]);
      } else if (n/u > 0 && n/u < 4) {
        for (let i = 0; i < n/u; i++) a.push(romanSymbols[u]);
      } else if (n/u > 0 && n/u < 4) {
        for (let i = 0; i < n/u; i++) a.push(romanSymbols[u]);
      } else if (n/u === 4) {
        a.push(convert(u));
        a.push(romanSymbols[n + u])
      } else if (n/u === 5) {
        a.push(romanSymbols[n]);
      } else if (n/u > 5 && n/u < 9) {
        a.push(romanSymbols[5*u]);
        for (let i = 0; i < n/u - 5; i++) a.push(romanSymbols[u]);
      } else if (n/u === 9) {
        a.push(romanSymbols[u])
        a.push(romanSymbols[10*u])
      }
      return a.join("");
    } else return null;
  }
  for (let i in arr) arr[i] = arr[i] * Math.pow(10, arr.length - i - 1);
  return arr.map(a => convert(a)).join("");
}

console.log(convertToRoman(649)); // DCXLIX
// 649 = 600 + 40 + 9
//     =  DC   XL   IX
