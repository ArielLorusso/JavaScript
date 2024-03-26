
const { frutas, dinero } = require("./c2A_exportar");

frutas.forEach((fruta) => {
  console.count(fruta);
});

console.log("mi dinero actual: ", dinero);

// node c1B_importar.js 