//ascending
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
let ar = [8, 9, 3, 7, 4, 5, 2, 9];
// bubbleSort(ar);
// console.log(ar);

//descending

function bubSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
}

// bubSort(ar)
// console.log(ar)

//Big O = O(n^2)



//ascending

function insertionSort(arr){
    for(let i =1 ; i<arr.length ; i++){
        let inst = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > inst){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = inst
    }
}

// insertionSort(ar)
// console.log(ar)

//Big O = O(n^2)


//descending

function insertSort(arr){
    for(let i =1 ; i<arr.length ; i++){
        let inst = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] < inst){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = inst
    }
}

// insertSort(ar)
// console.log(ar)


//ascending
function quickSort(arr){
    if(arr.length < 2){
        return arr
    }   
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else if(arr[i] > pivot){
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}


// console.log(quickSort(ar))

//descending
function quicSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else if(arr[i] > pivot){
            right.push(arr[i])
        }
    }
    return [...quicSort(right),pivot,...quicSort(left)]

}


// console.log(quicSort(ar))

//average Big  O = O(nlogn) loop (n) * recursion (logn)
//worst Big  O = O(n^2)  sorted array

function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);

        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

// console.log(quickSortInPlace(ar))

//in - place avoids space allocation of arrays.

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(left,right){
    const sorted = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

// console.log(mergeSort(ar))
// console.log(ar)

// Big O = O(nlogn)

