export class Triangle {
  constructor(num) {
    this.rows = this.buildRows(num);
    this.lastRow = this.buildRows(num).pop();
  }

  buildRows(num) {
    const pascalsTriangle = [];

    for (let i = 0; i < num; i++) {
      let num, temp = [];

      for (let j = 0; j <= i; j++) {
        j === 0 || j === i
          ? num = 1
          : num = pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j];

        temp.push(num);
      }
      pascalsTriangle.push(temp);
    }
    return pascalsTriangle;
  }
}
