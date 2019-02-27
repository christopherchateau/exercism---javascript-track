export const translate = (str, proteins = []) => {
  if (!str) return proteins;

  let name = findProtein(str.slice(0, 3));
  if (name === "STOP") return proteins;
  
  proteins.push(name);
  return translate(str.slice(3), proteins);
};

const findProtein = subStr => {
  switch (true) {
    case /AUG/.test(subStr):
      return "Methionine";
    case /UUU|UUC/.test(subStr):
      return "Phenylalanine";
    case /UUA|UUG/.test(subStr):
      return "Leucine";
    case /UCU|UCC|UCA|UCG/.test(subStr):
      return "Serine";
    case /UAU|UAC/.test(subStr):
      return "Tyrosine";
    case /UGU|UGC/.test(subStr):
      return "Cysteine";
    case /UGG/.test(subStr):
      return "Tryptophan";
    case /UAA|UAG|UGA|STOP/.test(subStr):
      return "STOP";
    default:
      throw Error("Invalid codon");
  }
};
