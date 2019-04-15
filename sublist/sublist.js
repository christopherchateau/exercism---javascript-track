export class List {
  constructor(arr) {
    this.arr = arr || [];
  }

  compare(listTwo) {
    if (this.compareArrays(this.arr, listTwo.arr)) {
      return "EQUAL";
    }
    if (this.matchSublist(this.arr, listTwo.arr)) {
      return "SUBLIST";
    }
    if (this.matchSublist(listTwo.arr, this.arr)) {
      return "SUPERLIST";
    }
    return "UNEQUAL";
  }

  matchSublist(a, b) {
    for (let i = 0; i <= b.length - a.length; i++) {
      if (this.compareArrays(a, b.slice(i, i + a.length))) {
        return true;
      }
    }
    return false;
  }

  compareArrays(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return a.length === b.length;
  }
}
