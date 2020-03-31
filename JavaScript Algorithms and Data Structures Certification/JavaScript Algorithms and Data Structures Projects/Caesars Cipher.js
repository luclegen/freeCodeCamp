function rot13(str) {
  return str.split("").map(l => {
    if (/[A-Z]/.test(l)) {
      let code = l.charCodeAt() - 13;
      if(code < 65) code = 26 + code;
      return String.fromCharCode(code);
    } else return l;
  }).join("");
}
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
