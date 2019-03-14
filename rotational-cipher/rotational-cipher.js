export const RotationalCipher = {

  rotate: (str, n) =>
    str
      .split("")
      .map(char =>
        char.match(/[A-Z]/i)
          ? char = String.fromCharCode(RotationalCipher.shiftChar(char, n))
          : char
      )
      .join(""),

  shiftChar: (char, n) => {
    let shiftedCharCode = char.charCodeAt(0) + n;
    
    if (
      char === char.toLowerCase() && shiftedCharCode > 122 ||
      char === char.toUpperCase() && shiftedCharCode > 90
    ) {
      shiftedCharCode -= 26;
    }
    return shiftedCharCode;
  }
};
