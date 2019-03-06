export class Flattener {

  flatten(input) {
    const flattened = input
      .filter(x => x !== null)
      .reduce((a, b) => a.concat(b), []);

    return JSON.stringify(flattened) === JSON.stringify(input)
      ? flattened
      : this.flatten(flattened);
  }
}
