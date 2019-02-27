export const isIsogram = str => {
  return !str
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .filter((x, ind, arr) => arr.lastIndexOf(x) !== ind).length;
};
