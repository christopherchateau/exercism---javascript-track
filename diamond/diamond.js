export class Diamond {
  makeDiamond(ltr) {
    if (ltr === "A") return "A\n";

    let halfDiamond = [];
    let width = (+ltr.charCodeAt(0) - 64) * 2 - 1;
    let halfWidth = Math.floor(width / 2);

    for (let i = 0; i <= halfWidth; i++) {
      let row = "";

      for (let j = 0; j < width; j++) {
        let character = " ";

        if (j === halfWidth - i || j === halfWidth + i) {
          character = String.fromCharCode(i + 65);
        }
        row += character;
      }
      halfDiamond.push(row);
    }
    let diamond = halfDiamond.concat(halfDiamond.slice(0, -1).reverse());
    
    return diamond.join("\n") + "\n";
  }
}
