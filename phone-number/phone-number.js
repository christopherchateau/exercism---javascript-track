export class PhoneNumber {
  constructor(str) {
    this.str = str;
  }

  number() {
    let newStr = this.str.replace(/[^\d]/g, "");

    if (this.validateNum(newStr[0])) {
      newStr = newStr.slice(1);
    }
    if (
      this.validateNum(newStr[0]) ||
      this.validateNum(newStr[3]) ||
      !newStr.length === 10
    ) {
      return null;
    }
    return newStr;
  }

  validateNum(num) {
    return num.match(/0|1/);
  }
}
