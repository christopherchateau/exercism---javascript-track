export const parse = str => {
  return str
    .split(/\s|-/)
    .map(word => word.toUpperCase().replace(/[^A-Z]/gi, "")[0] || "")
    .join("");
};
