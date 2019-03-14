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
      } else if (str.match(/\d/)) {
        formatedQuestion.push(this.formatNumber(str));
      }
    });

    if (formatedQuestion.length < 2) {
      throw new ArgumentError();
    }
    return this.calculate(formatedQuestion);
  }

  calculate(input) {
    let total = parseInt(input.shift());
    let computations = {
      plus: ind => (total += parseInt(input[ind + 1])),
      minus: ind => (total -= parseInt(input[ind + 1])),
      multiplied: ind => (total *= parseInt(input[ind + 1])),
      divided: ind => (total /= parseInt(input[ind + 1]))
    };

    input.forEach((str, ind) => {
      if (computations[str]) {
        computations[str](ind);
      }
    });
    return total;
  }

  formatNumber(str) {
    return str.replace(/[^\d-]/g, "");
  }
}

export class ArgumentError extends Error {}
