export class LinkedList {
  constructor() {
    this.linkedList = [];
  }

  push(input) {
    this.linkedList.push(input);
    return this.linkedList;
  }

  pop() {
    return this.linkedList.pop();
  }

  unshift(input) {
    this.linkedList.unshift(input);
    return this.linkedList;
  }

  shift() {
    return this.linkedList.shift();
  }

  count() {
    return this.linkedList.length;
  }

  delete(input) {
    this.linkedList = this.linkedList.filter(num => num !== input);
    return this.linkedList;
  }
}
