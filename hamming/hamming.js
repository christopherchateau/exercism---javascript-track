export const compute = (str1, str2) => {
  let counter = 0;

  if (str1.length !== str2.length) 
    throw Error('left and right strands must be of equal length');
  
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) 
      counter++;
  }
  return counter;
};
