export const bracketPush = str => {
  const strCopy = str;
  str = str.replace(/\{\}|\(\)|\[\]/g, "");

  return str === strCopy ? !str.length : bracketPush(str);
};
