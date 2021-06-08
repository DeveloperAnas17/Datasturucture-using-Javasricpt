// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
// Following example explains the above steps:

// arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
// 11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
// 11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
// 11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
// 11 12 22 25 64

// -----------Selection Sort PseudoCode--------------
// 1. Store the first element as the smallest value you've seen so far.
// 2. Compare this item to the next item in the array until you find a smaller number.
// 3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// 4. If the "minimum" is not the value (index) you initially began with, swap the two values.
// 5. Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

selectionSort([0, 2, 64, 25, 12, 22, 11]);

// Time Complexity: O(n2) as there are two nested loops.
// Auxiliary Space: O(1)
// The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.
