export class Anagram {
  constructor(str) {
    this.str = str.toLowerCase();
  }

  matches(anagrams) {
    return anagrams.reduce((acc, word) => {
      let wordLowerCase = word.toLowerCase();
      if (
        wordLowerCase !== this.str &&
        this.alphabetize(wordLowerCase) === this.alphabetize(this.str)
      )
        acc.push(word);
      return acc;
    }, []);
  }

  alphabetize(str) {
    return str
      .split("")
      .sort()
      .join("");
  }
}