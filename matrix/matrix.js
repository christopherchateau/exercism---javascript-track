export class Matrix {
  constructor(str) {
    this.rows = this.makeRows(str);
    this.columns = this.makeColumns(this.rows);
  }

  makeRows(str) {
    let rows = [];
    str = str.split("\n");
    for (let i = 0; i < str.length; i++) {
      rows.push(str[i].split(" ").map(Number));
    }
    return rows;
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
