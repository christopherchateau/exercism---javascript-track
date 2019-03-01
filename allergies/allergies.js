const allergyLevels = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
};

export class Allergies {
  constructor(num) {
    this.num = num;
  }

  list() {
    let results = [];
    let total = this.num;

    while (total > 0) {
      let keys = Object.keys(allergyLevels).reverse();

      for (let i = 0; i < keys.length; i++) {
        if (keys[i] <= total) {
          total -= keys[i];

          if (!results.includes(allergyLevels[keys[i]])) {
            results.unshift(allergyLevels[keys[i]]);
          }
          break;
        }
      }
    }
    return results;
  }

  allergicTo(input) {
    return this.list().includes(input);
  }
}
