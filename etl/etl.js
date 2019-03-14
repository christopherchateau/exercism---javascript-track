export const transform = obj => {
  let keys = Object.keys(obj);

  return keys.reduce((acc, key) => {

    obj[key].forEach(ltr => {
      ltr = ltr.toLowerCase();
      
      if (!acc[ltr]) {
        acc[ltr] = 0;
      }
      acc[ltr] += +key;
    });
    return acc;
  }, {});
};
