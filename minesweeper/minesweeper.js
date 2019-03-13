export const annotate = input => {
  for (let i = 0; i < input.length; i++) {

    for (let j = 0; j < input[i].length; j++) {

      if (input[i][j] !== "*") {
        let count = 0; 
        let findMines = str => {
          if (str === "*") count++;
        };
        findMines(input[i][j - 1]);
        findMines(input[i][j + 1]);

        if (i > 0) {
          findMines(input[i - 1][j]);
          findMines(input[i - 1][j - 1]);
          findMines(input[i - 1][j + 1]);
        }
        if (i < input.length - 1) {
          findMines(input[i + 1][j]);
          findMines(input[i + 1][j - 1]);
          findMines(input[i + 1][j + 1]);
        }
        if (count > 0) {
          input[i] = input[i].slice(0, j) + count + input[i].slice(j + 1);
        }
      }
    }
  }
  return input;
};
