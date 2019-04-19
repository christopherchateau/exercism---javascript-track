export const proverb = (...input) => {
  let proverb = [];
  let { qualifier } = input.slice(-1)[0];

  for (let i = 0; i < input.length - 1; i++) {
    proverb.push(`For want of a ${input[i]} the ${input[i + 1]} was lost.\n`);
  }

  if (qualifier) proverb.pop(), qualifier += " ";

  return `${proverb.join("")}And all for the want of a ${qualifier || ""}${input[0]}.`;
};
