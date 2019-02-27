export const sumOfMultiples = (arr, num) => {
  let factors = [0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[0]; j < num; j++) {
      if (j % arr[i] === 0 && !factors.includes(j)) {
        factors.push(j);
      }
    }
  }
  return factors.reduce((a, b) => a + b);
};
