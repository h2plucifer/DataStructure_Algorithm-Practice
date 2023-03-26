/**
 *  QUICK SORT
 *  Quick sort works on divide & conquer approach where it divides array recursively into left & right array
 *  where left array elements are less than pivot element & right array elements are greater than pivot
 */

let arr = [10, 5, 3, 2, 4, 12, 9];

function quickSort(arr) {
  if (arr.length == 1) return arr;
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) leftArr.push(arr[i]);
    else rightArr.push(arr[i]);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
console.log('Initial array : ', arr);
console.log('Array after quick sort : ', quickSort(arr));
