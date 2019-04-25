export class Triplet {
  constructor(a, b, c) {
    this.sum = () => [a, b, c].reduce((x, y) => x + y);
    this.product = () => [a, b, c].reduce((x, y) => x * y);
    this.isPythagorean = () => a < b < c && a * a + b * b === c * c;
  }
}

Triplet.where = ({ maxFactor = 0, minFactor = 0, sum }) => {
  const triplets = [];

  for (let a = minFactor; a < maxFactor - 1; a++) {
    for (let b = a + 1; b < maxFactor; b++) {
      for (let c = b + 1; c <= maxFactor; c++) {
        const temp = new Triplet(a, b, c);

        if (temp.isPythagorean()) {
          triplets.push(temp);
        }
      }
    }
  }
  return !sum ? triplets : triplets.filter(x => x.sum() === sum);
};
