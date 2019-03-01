export class Robot {
  constructor() {
    this.bearing = "";
    this.coordinates = [];
    this.directions = ["north", "east", "south", "west"];
    this.commands = { A: "advance", R: "turnRight", L: "turnLeft" };
  }

  orient(direction) {
    if (!this.directions.includes(direction)) {
      throw new InvalidInputError();
    }
    this.bearing = direction;
  }

  turnRight() {
    let index = this.directions.indexOf(this.bearing) + 1;
    if (index > 3) index = 0;
    this.bearing = this.directions[index];
  }

  turnLeft() {
    let index = this.directions.indexOf(this.bearing) - 1;
    if (index < 0) index = 3;
    this.bearing = this.directions[index];
  }

  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
    let [x, y] = this.coordinates;

    switch (this.bearing) {
      case "north":
        this.coordinates = [x, y + 1];
        break;
      case "east":
        this.coordinates = [x + 1, y];
        break;
      case "south":
        this.coordinates = [x, y - 1];
        break;
      case "west":
        this.coordinates = [x - 1, y];
        break;
    }
  }

  instructions(str) {
    let output = [];
    str.split("").forEach(ltr => output.push(this.commands[ltr]));
    return output;
  }

  place(input) {
    this.bearing = input.direction;
    this.coordinates = [input.x, input.y];
  }

  evaluate(str) {
    str.split("").forEach(cmd => this[this.commands[cmd]]());
  }
}

export class InvalidInputError extends Error {}
