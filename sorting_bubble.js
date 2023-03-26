/**
 * BUBBLE SORT
 * -Iterate over  length-1 times i=lenght-1 to 1
 *    - iterate over j=0 to i-1
 *    - swap jth & j+1th element if jth element > j+1th element // bubble the bigger one to the end
 */

let arr = [10, 5, 3, 2, 4, 12, 9];

for (let i = arr.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //shorter way to swap elements as array is mutable
  }
}
console.log('Array after bubble sort : ', arr);
