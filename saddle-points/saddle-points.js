export class Matrix {
  constructor(input) {
    this.rows = this.makeRows(input);
    this.columns = this.makeColumns();
    this.saddlePoints = this.findSaddlePoints();
  }

  makeRows(input) {
    return input.split("\n").map(x => x.trim().split(" ").map(Number));
  }

  makeColumns() {
    let columns = [];

    for (let i = 0; i < this.rows.length; i++) {
      let temp = [];

      for (let j = 0; j < this.rows.length; j++) {
        temp.push(this.rows[j][i]);
      }
      columns.push(temp);
    }
    return columns;
  }

  findSaddlePoints() {
    let saddlePoints = []

    for (let i = 0; i < this.rows.length; i++) {
      let max = Math.max(...this.rows[i])
      
      for (let j = 0; j < this.rows[0].length; j++) {
        if (this.rows[i][j] === max) {
          let column = this.columns[j];
          if (max === Math.min(...column)) {
            saddlePoints.push([i, j])
          }
        }
      }
    }
    return saddlePoints;
  }
}
