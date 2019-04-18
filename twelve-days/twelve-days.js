export class TwelveDays {
  constructor() {

    this.verse = (a, b = a) => {
      let output = "";

      for (let i = a; i <= b; i++) {
        output += this.prepareVerse(i);
        if (a !== b && i < b) output += "\n";
      }
      return output;
    };
    
    this.prepareVerse = num => {
      let output = `On the ${this.lyrics[num][0]} day of Christmas my true love gave to me:`;
      
      for (let i = num; i > 0; i--) {
        let selectedVerse = this.lyrics[i][1];
        if (num === 1) selectedVerse = selectedVerse.slice(4);
        output += " " + selectedVerse;
      }
      return output + "\n";
    };

    this.sing = () => this.verse(1, 12);

    this.lyrics = {
      1: ["first", "and a Partridge in a Pear Tree."],
      2: ["second", "two Turtle Doves,"],
      3: ["third", "three French Hens,"],
      4: ["fourth", "four Calling Birds,"],
      5: ["fifth", "five Gold Rings,"],
      6: ["sixth", "six Geese-a-Laying,"],
      7: ["seventh", "seven Swans-a-Swimming,"],
      8: ["eighth", "eight Maids-a-Milking,"],
      9: ["ninth", "nine Ladies Dancing,"],
      10: ["tenth", "ten Lords-a-Leaping,"],
      11: ["eleventh", "eleven Pipers Piping,"],
      12: ["twelfth", "twelve Drummers Drumming,"]
    };
  }
}
