const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map((rowLetter) => rowLetter.join(""));
  const verticalJoin = transpose(letters).map((columnLetter) =>
    columnLetter.join("")
  );
  let found = false;

  for (const string of horizontalJoin) {
    if (string.includes(word)) found = true;
  }
  for (const string of verticalJoin) {
    if (string.includes(word)) found = true;
  }

  return found;
};
const transpose = function (matrix) {
  // Put your solution here
  const newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      newArray[y].push(matrix[x][y]);
    }
  }
  return newArray;

  // return matrix[0].map((colum, c) => matrix.map((row, r) => matrix[r][c]));
};

module.exports = wordSearch;
