function bubbleSort(arr, n) {
  if (n == 1) {
    return;
  }

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    bubbleSort(arr, n-1);
  }
  odd = arr.filter((arr) => arr % 2 == 1);
  even = arr.filter((arr) => arr % 2 == 0);
}

arr = [2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37];
bubbleSort(arr, arr.length);
console.log(`Sorted Array : ${arr}`);
console.log(`Odd Number   : ${odd}`);
console.log(`Even Number  : ${even}`);
