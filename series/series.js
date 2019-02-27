export class Series {
  constructor(str) {
    this.str = str;
    this.digits = this.str.split("").map(x => +x);
  }

  slices(num) {
    let arr = [];
    let len = this.digits.length - num;

    if (len < 0) throw Error("Slice size is too big.");

    for (let i = 0; i <= len; i++) {
      let temp = this.digits.slice(i, i + num);
      arr.push(temp);
    }
    return arr;
  }
}
