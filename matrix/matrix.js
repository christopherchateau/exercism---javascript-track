export class Matrix {
  constructor(str) {
    this.rows = str.split("\n").map(row => row.split(" ").map(Number));
    this.columns = this.makeColumns(this.rows);
  }

  makeColumns(rows) {
    let columns = [];

    for (let i = 0; i < rows[0].length; i++) {
      let temp = [];

      for (let j = 0; j < rows.length; j++) {
        temp.push(rows[j][i]);
      }
      columns.push(temp);
    }
    return columns;
  }
}
