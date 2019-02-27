export const steps = (n, count = 0) => {
  if (n <= 0) 
    throw "Only positive numbers are allowed";

  return n === 1 
         ? count 
         : steps(n % 2 
                 ? n * 3 + 1 
                 : n / 2
                 , count + 1
         );
};
