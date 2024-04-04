function arrayPartition(arr, pivot) {
    let left  = 0
    let right = arr.length - 1
    while(left < right){
        if(arr[left] >= pivot){
            if(arr[left] < arr[right]){
                [arr[left],arr[right - 1]] = [arr[right - 1],arr[left]]
            }else{
                [arr[left],arr[right]] = [arr[right],arr[left]]
            }
            right--
        }else{
            left++
        }
    }
    
    return arr
}

console.log(arrayPartition([7, 4, 2, 7, 1, 0], 4));
