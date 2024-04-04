let nums = [2, 4, 6, 5, 3.0];

function Linear(num, t) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === t) {
      return i + 1;
    }
  }
  return -1;
}

// console.log(Linear(nums, 3));

//Big O = O(n)

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function Binary(num, t) {
  let left = 0;
  let right = num.length - 1;

  for (let i = left; i <= right; i++) {
    let middle = Math.floor((left + right) / 2);
    if (num[middle] === t) {
      return middle;
    } else if (num[middle] > t) {
      right = middle - 1;
    } else if (num[middle] < t) {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(Binary(arr, 9));

//Big O = O(logn)

function recBinary(arr, n) {
  
  function search(num, t, left, right ) {
    if(left > right){
      return -1
    }
    let middle = Math.floor((left + right) / 2);
    if (num[middle] === t) {
      return middle;
    } else if (t < num[middle]) {
        return search(num,t,left,middle - 1)
    }
    else if(t > num[middle]){
        return search(num,t,middle + 1,right)
    }
  }
  return search(arr,n,0,arr.length - 1)
}

console.log(recBinary(arr,0))
