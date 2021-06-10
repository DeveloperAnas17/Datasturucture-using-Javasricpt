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
