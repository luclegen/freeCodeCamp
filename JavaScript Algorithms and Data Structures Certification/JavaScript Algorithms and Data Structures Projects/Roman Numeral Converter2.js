function convertToRoman(num) {
  let romanized = "", decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      romanNumberal = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
   for (let i = 0; i < decimalValue.length; i++) {
     while (decimalValue[i] <= num) {
       romanized += romanNumberal[i];
       num -= decimalValue[i];
     }
   }
  return romanized;
 }
 
 console.log(convertToRoman(36));