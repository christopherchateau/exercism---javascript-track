export class Luhn {
  constructor(num) {
    this.num = num;
    this.valid = this.validate();
  }

  validate() {
    let str = this.num.toString().replace(/\s/g, "");
    if (str.length < 2 || /\D/g.test(str)) return false;

    let digits = str
      .split("")
      .map(Number)
      .reverse();

    for (let i = 0; i < digits.length; i++) {
      if (i % 2) digits[i] *= 2;
      if (digits[i] > 9) digits[i] -= 9;
    }
    let sum = digits.reduce((a, b) => a + b);
    return sum % 10 === 0;
  }
}
