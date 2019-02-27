export const NucleotideCounts = {

  parse: str => {
    const totals = { A: 0, C: 0, G: 0, T: 0 };

    str.split("").forEach(ltr =>
      /[ACGT]/.test(ltr) 
      ? totals[ltr]++ 
      : NucleotideCounts.throwError()
    );
    return Object.values(totals).join(" ");
  },

  throwError: () => {
    throw "Invalid nucleotide in strand";
  }
}