export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }
  kind() {
    const [a, b, c] = this.sides;
    this.validateInput(a, b, c);

    if (a === b && b === c) {
      return "equilateral";
    }
    if (a === b || a === c || b === c) {
      return "isosceles";
    }
    return "scalene";
  }
  validateInput(a, b, c) {
    for (let i = 0; i < 3; i++) {
      if (this.sides[i] <= 0) {
        throw Error;
      }
    }
    if (a + b < c || a + c < b || b + c < a) {
      throw Error;
    }
  }
}
