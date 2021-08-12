const { fstat } = require("fs");

console.log("Loading utils");

// const name = "Peter";

// const add = function (a, b) {
//   return a + b;
// };

const getNotes = function (notes) {
  return fs.readdirSync(notes);
};

module.exports = getNotes;
