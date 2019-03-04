export const validate = num => {
  let digits = num.toString().split("");

  return (
    digits.reduce((total, digit) => {
      total += Math.pow(digit, digits.length);
      return total;
    }, 0) === num
  );
};
