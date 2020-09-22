/*
  How the Array.prototype.sort() method works.

  The sort() method sorts the elements of an array in place and returns the sorted array.
  The default sort order is ascending, built upon converting the elements into strings,
  then comparing their sequences of UTF-16 code units values.

  The sort() can also take in a comparator function. (Look below)
*/


// DEFAULT SORT FOR STRING AND NUMBERS

console.log(['Banana', 'Orange', 'Apple', 'Kiwi', 'Mango'].sort());
// [ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]


console.log([6, 4, 15, 10].sort());
// [ 10, 15, 4, 6 ]



/*
  USING THE COMPARATOR FUNCTION


  .sort(compareFunction)
  function compareFunction(a, b) { ... }

  If the compare function returns:
  - a negative number, a comes before b (a is smaller)
  - a positive number, a comes after b (a is bigger)
  - 0, a and b are the same (a == b as far as sorting is concerned)
*/

// ascending order
function numberCompare(num1, num2) {
  return num1 - num2;
}
console.log([6, 4, 15, 10].sort(numberCompare));


// string length comparison
function compareByLength(str1, str2) {
  return str1.length - str2.length;
}
console.log(['Banana', 'Orange', 'Apple', 'Kiwi', 'Mango'].sort(compareByLength));
// [ 'Kiwi', 'Apple', 'Mango', 'Banana', 'Orange' ]