export class ISBN {
  constructor(input) {
    this.input = input;
  }

  isValid() {
    let result = this.input
      .replace(/-/g, "")
      .split("")
      .map((x, i) => {
        if (x === "X") x = 10;
        return x * (10 - i);
      })
      .reduce((a, b) => a + b);

    return result % 11 === 0;
  }
}
