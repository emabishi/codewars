/*
  Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
  Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
  If the parameter is itself not a perfect square, than - 1 should be returned.You may assume the parameter is positive.
*/

const assert = require('assert');

function findNextSquare(original_square) {
  // Return the next square if original_square if a perfect square,
  if (Number.isInteger(original_square) && Number.isInteger(Math.sqrt(original_square))) {
    // Find next perfect square
    let current_square = original_square + 1;
    const is_perfect_square = (number) => Number.isInteger(number) && Number.isInteger(Math.sqrt(number))
    while (!(is_perfect_square(current_square))) {
      current_square++;
    }
    return current_square;
  }
  // -1 otherwise
  return -1;
}
// --------  OR ---------

const is_perfect_square = (number) => Number.isInteger(number) && Number.isInteger(Math.sqrt(number));

function findNextSquare(original_square) {
  // Return the next square if original_square if a perfect square,
  if (is_perfect_square(original_square)) {
    // Find next perfect square
    let current_square = original_square + 1;
    while (!(is_perfect_square(current_square))) {
      current_square++;
    }
    return current_square;
  }
  // -1 otherwise
  return -1;
}

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  // Find next whole number to square to make next perfect square
  // Add 1 to square root of current square
  // Square that number
  const root = Math.sqrt(sq); // root = sqrt(sq)
  const nextRoot = root + 1;
  const nextSquare = Math.pow((nextRoot), 2); // (root + 1)^2
  return Number.isInteger(sq) && Number.isInteger(root) ? nextSquare : -1;
}

console.log(findNextSquare(121))


assert(findNextSquare(121), 144);
assert(findNextSquare(625), 676);
assert(findNextSquare(319225), 320356);
assert(findNextSquare(15241383936), 15241630849);
assert(findNextSquare(155), -1);
assert(findNextSquare(342786627), -1);