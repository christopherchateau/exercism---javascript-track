export class Prime {
  nth(n) {
    if (n < 1) throw Error("Prime is not possible");

    let primeNums = [];
    let i = 2;

    while (primeNums.length < n) {
      if (this.isPrime(i)) {
        primeNums.push(i);
      }
      i++;
    }
    return primeNums.pop();
  }

  isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
