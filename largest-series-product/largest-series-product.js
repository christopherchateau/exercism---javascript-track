export const largestProduct = (digits, n) => {
  if (/\D/g.test(digits) || n < 0) 
    throw Error("Invalid input.");

  if (n > digits.length) 
    throw Error("Slice size is too big.");

  let maxSum = 0;

  for (let i = 0; i <= digits.length - n; i++) {
    let sum = digits
      .slice(i, i + n)
      .split("")
      .map(Number)
      .reduce((a, b) => a * b, 1);

    if (sum > maxSum) 
      maxSum = sum;
  }
  return maxSum;
};
