/* Filename: ComplexCode.js */

// This code demonstrates a complex algorithm for generating a spiral matrix of numbers

function generateSpiralMatrix(n) {
  // Create an empty matrix
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }
  
  let num = 1; // Starting number
  let startRow = 0, endRow = n - 1;
  let startCol = 0, endCol = n - 1;
  
  while (startRow <= endRow && startCol <= endCol) {
    // Fill the top row
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = num++;
    }
    startRow++;

    // Fill the rightmost column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = num++;
    }
    endCol--;

    // Fill the bottom row
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = num++;
      }
      endRow--;
    }

    // Fill the leftmost column
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = num++;
      }
      startCol++;
    }
  }

  return matrix;
}

// Generate a spiral matrix of size 5x5
const spiralMatrix = generateSpiralMatrix(5);

// Print the matrix
for (let i = 0; i < spiralMatrix.length; i++) {
  console.log(spiralMatrix[i].join("\t"));
}