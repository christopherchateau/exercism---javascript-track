export const isPangram = str => {
  let letters = [];

  str
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .forEach(ltr => {
      if (!letters.includes(ltr)) {
        letters.push(ltr);
      }
    });
  return letters.length === 26;
};
