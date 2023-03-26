/**
 * MERGE SORT
 * Merge sort uses the concept of divide & conquer
 * Function calls itelf after dividing array in halves till array is of single element
 * Finally merge function is used to combine individual elements from these 2 array by putting in elemnts in proper position
 */

let arr = [10, 5, 3, 2, 4, 12, 9];

function mergeSort(arr) {
  if (arr.length == 1) return arr;
  let midIndex = Math.floor(arr.length / 2); // To divide array into 2 equal(even) halves
  let leftArr = arr.slice(0, midIndex);
  let rightArr = arr.slice(midIndex);
  return merge(mergeSort(leftArr), mergeSort(rightArr)); //recursively calls mergeSort to divide array recursively into 2 halves till individual array has only 1 element
  // & finally merge() is called to combine individual array element in sorted position
}

function merge(leftArr, rightArr) {
  let i = 0;
  (j = 0), (combinedArray = []);
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      // add element from left & right array in sorted position in combined array
      combinedArray.push(leftArr[i]);
      i++;
    } else {
      combinedArray.push(rightArr[j]);
      j++;
    }
  }
  while (i < leftArr.length) {
    // add any remaining elements in left array to result
    combinedArray.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    // add any remaining elements in right array to result
    combinedArray.push(rightArr[j]);
    j++;
  }
  return combinedArray;
}

console.log('Array after merge sort : ', mergeSort(arr));
