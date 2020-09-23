/*
simple bubble sort
O(n^2) - time

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.log(`array[${j}] = ${array[j]}`);
      console.log(`array[${j + 1}] = ${array[j + 1]}\n\n`);

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
*/

/*
  better bubble sort
  O(n^2) - time
*/
function bubbleSort(array) {
  let noSwaps = false;

  for (let i = array.length - 1; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return array;
}

let array = [3, 2, 6, 0]; // [ 0, 2, 3, 6 ]
console.log(bubbleSort(array));

let unsortedArray = [3, 6, 4, 8, 2, 9, 0]; // [ 0, 2, 3, 4, 6, 8, 9 ]
console.log(bubbleSort(unsortedArray));

let almostSortedArray = [6, 1, 2, 3, 4, 5]; // [ 1, 2, 3, 4, 5, 6 ]
console.log(bubbleSort(almostSortedArray));