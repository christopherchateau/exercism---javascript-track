export const accumulate = (input, accumulator) => {
  return input.map(x => accumulator(x));
};
