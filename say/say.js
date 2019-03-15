export class Say {

  inEnglish(n) {
    if (n === 0) 
      return "zero";
    if (n < 0 || n > 999999999999) {
      throw Error("Number must be between 0 and 999,999,999,999.");
    }
    let english = [], numArr = [];

    n = n.toString().split("").reverse().join("");

    for (let i = 0; i < n.length; i += 3) {
      numArr.unshift(
        n.slice(i, i + 3).split("").reverse()
      );
    }

    while (numArr.length) {
      let tempArr = numArr.shift();
      let addHighNum = () => {
        if (highNums[numArr.length]) {
          english.push(highNums[numArr.length]);
        }
      };

      if (tempArr.length === 3 && tempArr[0] !== "0") {
        english.push(nums[tempArr[0]], "hundred");
        tempArr.shift();
      }

      if (nums[+tempArr.join("")]) {
        english.push(nums[+tempArr.join("")]);
      } 
      
      else if (tempArr.length === 2) {
        let tenth = tens[tempArr[0]];

        if (tempArr[1] !== "0") {
          tenth += "-" + nums[tempArr[1]];
        }
        english.push(tenth);
      }

      if (tempArr.slice(-1).join("").match(/[^0]/)) {
        addHighNum();
      }
    }
    return english.join(" ").trim();
  }
}

const nums = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fiteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
};

const tens = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety"
};

const highNums = {
  1: "thousand",
  2: "million",
  3: "billion"
};