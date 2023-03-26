let arr = [10, 5, 3, 2, 4, 12, 9];
let temp; //used to hold element that will put to sorted position // Element from start to temp element will be sorted after iteration
for (let i = 1; i < arr.length; i++) {
  temp = arr[i];
  for (var j = i - 1; arr[j] > temp; j--) {
    arr[j + 1] = arr[j]; // shift next jth element to j+1 position till jth element >temp
  }
  arr[j + 1] = temp; //finally put temp element to j+1 position which will be a its sorted position from start
}

console.log('Array after insertion sort : ', arr);
