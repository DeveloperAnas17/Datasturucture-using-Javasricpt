// Insertion Sort

// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
// Algorithm
// To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

//  ------------ EXAMPLE------------

// 12, 11, 13, 5, 6
// Let us loop for i = 1 (second element of the array) to 4 (last element of the array)
// i = 1. Since 11 is smaller than 12, move 12 and insert 11 before 12
// 11, 12, 13, 5, 6
// i = 2. 13 will remain at its position as all elements in A[0..I-1] are smaller than 13
// 11, 12, 13, 5, 6
// i = 3. 5 will move to the beginning and all other elements from 11 to 13 will move one position ahead of their current position.
// 5, 11, 12, 13, 6
// i = 4. 6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position.
// 5, 6, 11, 12, 13

// Insertion Sort Pseudocode

// 1. Start by picking the second element in the array
//  2. Now compare the second element with the one before it and swap if necessary.
// 3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// 4. Repeat until the array is sorted

function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

InsertionSort([12, 11, 13, 5, 6]);