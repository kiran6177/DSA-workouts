function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  arr;
  let pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[left];
  let swapIndex = left;
  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      if (i != swapIndex) {
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      }
    }
  }
  if (swapIndex != left) {
    [arr[swapIndex], arr[left]] = [arr[left], arr[swapIndex]];
  }
  return swapIndex;
}

console.log(quickSort([4, 2, 5, 1, 6, 9]));


//time- average - O(nlogn) worst-O(n^2)
//space - O(logn)