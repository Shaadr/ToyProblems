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

// Gauß needs help! (Sums of a lot of numbers). 7kyu
//
// Due to another of his misbehaved, the primary school's teacher of the young
// Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss
// busy for a good long time, while he teaching arithmetic to his mates, assigned him the
// problem of adding up all the whole numbers from 1 through a given number n.
//
// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can;
// so, he can astonish his teacher and rescue his recreation interval.

// It's your duty to verify that n is a valid positive integer number. If not, please, return false

// Here's, an example:
// f(n=100) // returns 5050

function f(n){
  var sum = 0;
  if(typeof n ==='number' && (n%1)=== 0 && n > 0){
    for(var i = 0; i <= n; i++) {
        sum += i;
    }
  } else {
    return false;
    }
  return sum
};

f(100);
f(20);
f('a');
f('five');

//////////////////////////
// ________ 4 _________ //
//////////////////////////

// Sort with Arrow Functions 7kyu
//
// Order People by age Using Arrow Function
//
// Sort and Order people by their age using Arrow Functions
// Task
//
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
// Input
//
// Input will be a valid array with People objects containing an Age and Name
// Output
//
// Output will be a valid sorted array with People objects sorted by Age in ascending order

var OrderPeople = function(people){
  return people.sort((a,b) => a.age - b.age );
}

//////////////////////////
// ________ 5 _________ //
//////////////////////////

// Invalid Input - Error Handling #1. 7kyu
//
// Error Handling is very important in coding and seems to be overlooked or not implemented properly.
//
// Task
//
// Your task is to implement a function which takes a string as input and return an object containing
// the properties vowels and consonants. The vowels property must contain the
// total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}.
// Handle invalid input and don't forget to return valid ones.
//
// Input
//
// The input is any random string. You must then discern what are vowels and what are
// consonants and sum for each category their total occurrences in an object.
// However you could also receive inputs that are not strings. If this happens then you must
// return an object with a vowels and consonants total of 0 because the input was NOT a string.
// Refer to the Example section for a more visual representation of which inputs you could
// receive and the outputs expected. :)
//
// Example:
// Input: getCount('test')
// Output: {vowels:1,consonants:3}
//
// Input: getCount('tEst')
// Output: {vowels:1,consonants:3}
//
// Input getCount('    ')
// Output: {vowels:0,consonants:0}
//
// Input getCount()
// Output: {vowels:0,consonants:0}

function getCount(words) {
  let f = typeof words === 'string';
  return {
    vowels: f ? words.replace(/[^aeiou]/gi,'').length : 0,
    consonants: f ? words.replace(/[^bcdfghjklmnpqrstvwxyz]/gi,'').length : 0
  }
}

getCount('test');
getCount('tEst');
getCount('    ');
getCount();
getCount('To Kata or not to Kata');



//////////////////////////
// ________ 6 _________ //
//////////////////////////

//////////////////////////
// ________ 7 _________ //
//////////////////////////
