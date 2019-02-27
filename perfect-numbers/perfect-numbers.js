export const classify = num => {
  if (num <= 0)
    throw Error("Classification is only possible for natural numbers.");

  let factors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) factors.push(i);
  }
  let total = factors.reduce((a, b) => a + b, 0);
  return total === num ? "perfect" : total < num ? "deficient" : "abundant";
};
