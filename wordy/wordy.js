export class WordProblem {
  constructor(question) {
    this.question = question.split(" ");
  }
  
  answer() {
    let formatedQuestion = [];
    let operators = ["plus", "minus", "multiplied", "divided"];

    this.question.forEach(str => {

      if (operators.includes(str)) {
        formatedQuestion.push(str);
      } 
      else if (/\d/.test(str)) {
        formatedQuestion.push(this.formatNumber(str));
      }
    });

    if (formatedQuestion.length < 2) {
      throw new ArgumentError();
    }
    return this.calculate(formatedQuestion);
  }

  calculate(input) {
    let total = +input.shift();

    input.forEach((str, ind) => {
      switch (str) {
        case "plus": total += +input[ind + 1];
          break;
        case "minus": total -= +input[ind + 1];
          break;
        case "multiplied": total *= +input[ind + 1];
          break;
        case "divided": total /= +input[ind + 1];
          break;
      }
    });
    return total;
  }

  formatNumber(str) {
    return str.replace(/[^\d-]/g, "");
  }
}

export class ArgumentError extends Error {}