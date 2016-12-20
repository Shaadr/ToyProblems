//////////////////////////
// ________ 1 _________ //
//////////////////////////
  // Formatting decimal places #0  8kyu
  //
  // Each number should be formatted that it is rounded to two decimal places.
  // You don't need to check whether the input is a valid number because only
  // valid numbers are used in the tests.

//   Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100
}

twoDecimalPlaces(5.5589)
twoDecimalPlaces(3.3424)
twoDecimalPlaces(8.2923)
twoDecimalPlaces(101.020)
twoDecimalPlaces(83.835)

//////////////////////////
// ________ 2 _________ //
//////////////////////////

// Find the next perfect square! 7kyu
//
// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square
// after the one passed as a parameter. Recall that an integral perfect square is an
// integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square, than -1 should be returned.
// You may assume the parameter is positive.

// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
};

findNextSquare(121)
findNextSquare(625)
findNextSquare(114)
findNextSquare(225)
findNextSquare(4)

//////////////////////////
// ________ 3 _________ //
//////////////////////////

//////////////////////////
// ________ 4 _________ //
//////////////////////////

//////////////////////////
// ________ 5 _________ //
//////////////////////////

//////////////////////////
// ________ 6 _________ //
//////////////////////////

//////////////////////////
// ________ 7 _________ //
//////////////////////////
