export const solve = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return null;

  let score = 0;
  let hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  switch (true) {
    case hypotenuse <= 1: score = 10; break;
    case hypotenuse <= 5: score = 5; break;
    case hypotenuse <= 10: score = 1; break;
  }
  return score;
};
