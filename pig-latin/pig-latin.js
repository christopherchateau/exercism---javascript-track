export const translator = {
  translate: input => {
    input = input.split(" ");

    for (let i = 0; i < input.length; i++) {

      if (/[aeiou]/.test(input[i][0]) || /yt|xr/.test(input[i].slice(0, 2))) {
        input[i] += "ay";
      } 
      else if (
        /qu/.test(input[i].slice(1, 3)) ||
        /sch|thr/.test(input[i].slice(0, 3))
      ) {
        input[i] = translator.translation(input[i], 3);
      } 
      else if (/ch|qu|th|rh/.test(input[i].slice(0, 2))) {
        input[i] = translator.translation(input[i], 2);
      } 
      else {
        input[i] = translator.translation(input[i], 1);
      }
    }
    return input.join(" ");
  },

  translation: (str, n) => {
    return str.slice(n) + str.slice(0, n) + "ay";
  }
};
