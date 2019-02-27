export const transpose = input => {
  let result = [];

  for (let i = 0; i < input.length; i++) {

    for (let j = 0; j < input[i].length; j++) {
      let str = input[i][j];
      let rowLength = 0;

      if (result[j]) {
        rowLength = result[j].length;
      }
      if (i > rowLength) {
        let spaces = " ".repeat(i - rowLength);
        str = spaces + str;
      }
      result[j] ? result[j] += str : result[j] = str;
    }
  }
  return result;
};
