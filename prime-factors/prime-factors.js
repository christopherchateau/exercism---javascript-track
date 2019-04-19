export const primeFactors = num => {
  let factors = [];
  let i = 2;

  while (num !== 1)
    if (num % i === 0) {
      factors.push(i);
      num /= i;
    } else {
      i++;
      while (!validatePrime(i)) i++;
    }

  function validatePrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return factors;
};
