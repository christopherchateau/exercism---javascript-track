export const BeerSong = {
  verse: num => BeerSong.generateVerse(num),

  sing: (num1 = 99, num2 = 0) => {
    let song = "";
    for (let i = num1; i >= num2; i--) {
      song += BeerSong.generateVerse(i);
      if (i > num2) song += "\n";
    }
    return song;
  },

  generateVerse: num => {
    let num2 = num - 1 + " bottles";
    let bottles = "bottles";
    let one = "one";

    if (num === 0) {
      return BeerSong.lastVerse();
    }
    if (num === 1) {
      num2 = "no more bottles";
      bottles = "bottle";
      one = "it";
    } else if (num === 2) {
      num2 = "1 bottle";
    }
    return `${num} ${bottles} of beer on the wall, ${num} ${bottles} of beer.
Take ${one} down and pass it around, ${num2} of beer on the wall.
`;
  },

  lastVerse: () => {
    return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
  }
};
