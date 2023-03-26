/**
 * SELECTION SORT
 * Selection sort works by selecting the index with minimum value & moving it to the proper position
 */

let arr = [10, 5, 3, 2, 4, 12, 9];

for (let i = 0; i < arr.length; i++) {
  let minIndex = i; //setting i as min index
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }
  [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]; //shorter way (as arrays are mutable)to swap new minIndex element with ith element
}
console.log('Array after selection sort : ', arr);
