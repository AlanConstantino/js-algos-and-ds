/* 
  Selection Sort
  O(n^2) - time

  Selection sort in only better than bubble sort when you want to minimize the
  number of swaps you want to do.

  If you're worried about minimizing the amount of writes to memory, selection
  sort can be good for that. It's still a slow sort algorithm though.
*/
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      let minValue = array[minIndex];
      let nextValue = array[j];

      // find min value
      if (minValue > nextValue) {
        minIndex = j;
      }
    }

    // swap
    if (i !== minIndex) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

const array = [5, 3, 4, 1, 2];
console.log(selectionSort(array));

const longerArray = [22, 34, 12, 2, 4, 56, 64, 23, 43, 87, 45];
console.log(selectionSort(longerArray));