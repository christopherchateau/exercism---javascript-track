let usedNames = {};

export class Robot {
  constructor() {
    this.randomName = this.makeName();
    this.usedNames = {};
  }

  get name() {
    return this.randomName;
  }

  makeName() {
    let name = "";

    while (name.length < 2) {
      let ltrCode = this.generateRanomNum(26, 65);
      name += String.fromCharCode(ltrCode);
    }

    while (name.length < 5) {
      name += this.generateRanomNum(9);
    }

    usedNames[name] ? name = this.makeName() : usedNames[name] = true;
    return name;
  }

  generateRanomNum(range, adj = 0) {
    let num = Math.random() * range + adj;
    return num.toFixed(0);
  }

  reset() {
    this.randomName = this.makeName();
  }
}
