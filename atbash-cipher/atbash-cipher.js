export const encode = input => {
  let result = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  input = input.toLowerCase().replace(/[^a-z\d]/g, "");

  for (let i = 0; i < input.length; i++) {
    input[i].match(/[a-z]/)
      ? result += alphabet[alphabet.length - alphabet.indexOf(input[i]) - 1]
      : result += input[i];

    if ((i + 1) % 5 === 0) {
      result += " ";
    }
  }

  return result.trim();
};
