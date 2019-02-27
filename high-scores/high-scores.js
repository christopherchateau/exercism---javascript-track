export class HighScores {
  constructor(input) {
    this.scores = input;
    this.latest = input.slice(-1)[0];
    this.personalBest = Math.max(...input);
    this.personalTopThree = [...input]
      .sort((a, b) => a - b)
      .reverse()
      .slice(0, 3);
  }
}
