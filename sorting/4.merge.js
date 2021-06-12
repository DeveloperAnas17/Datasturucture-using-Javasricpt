// Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See the following C implementation for details.

// 1. In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// 2. Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// 3. This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

// ----------Merging Arrays Pseudocode------------
// a. Create an empty array, take a look at the smallest values in each input array
// b. While there are still values we haven't looked at...
// c. If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// d. If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// e. Once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);

// Sorting mergin Arrays
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([4, 1, 3, 2, 8, 9, 7]));

// Big O of Merge Sort

// Time Complexity
// Best: O(n log n)
// Average: O(n log n)
// Worst: O(n log n)

// Space Complexity: O(n)
