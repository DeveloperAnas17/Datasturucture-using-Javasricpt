// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
// Example:
// First Pass:
// ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ),
// Here, algorithm compares the first two elements, and swaps since 5 > 1.
// ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
// ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
// ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ),
// Now, since these elements are already in order (8 > 5), algorithm does not swap them.
// Second Pass:
// ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
// ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
// Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.
// Third Pass:
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

// Bubble Sort Pseudocode
// Start looping from the end of the array towards the beginning with a variable called i
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j + 1], swap those two values!
// Return the sorted array

// Bubble Sort
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// Optimized Bubble sort
function bubbleSort(arr) {
  var noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// Time Complexity:
// Best Case: O(n)
// Average Case: O(n * n)
// Worst Case: O(n * n)
