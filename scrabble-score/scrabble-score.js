export const score = (str, total = 0) => {
  const ltr = str[0] || '';

  switch (true) {
    case /[dg]/i.test(ltr): total += 2; break;
    case /[bcmp]/i.test(ltr): total += 3; break;
    case /[fhvwy]/i.test(ltr): total += 4; break;
    case /[k]/i.test(ltr): total += 5; break;
    case /[jx]/i.test(ltr): total += 8; break;
    case /[qz]/i.test(ltr): total += 10; break;
    case /./.test(ltr): total++;
  }
  return str.length ? score(str.slice(1), total) : total;
};