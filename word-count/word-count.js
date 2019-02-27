export class Words {
  count(str) {
    const totals = Object.create(null);
    str
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .forEach(word => {
        if (!totals[word]) {
          totals[word] = 0;
        }
        totals[word]++;
      });
    return totals;
  }
}
