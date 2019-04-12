export const encode = input => {
  input = input.split("");
  let encoded = "";

  while (input.length) {
    let count = 1;
    let currentChar = input.shift();

    while (input[0] === currentChar) {
      input.shift();
      count++;
    }
    if (count > 1) {
      encoded += count;
    }
    encoded += currentChar;
  }
  return encoded;
};

export const decode = input => {
  return input.replace(/(\d+.)/g, x => {
    return x.slice(-1).repeat(x.slice(0, -1));
  });
};
