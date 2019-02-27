class School {
  constructor() {
    this._schoolRoster = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this._schoolRoster));
  }

  add(name, num) {
    let updatedRoster = [name, ...this.grade(num)].sort();
    this._schoolRoster[num] = updatedRoster;
  }

  grade(num) {
    return this.roster()[num] || [];
  }
}

module.exports = School;
