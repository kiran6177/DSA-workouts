let array = ['banana', 'apple', 'orange', 'grapes', 'pineapple']

function sortString(arr,left = 0,right = arr.length - 1){
    if(left > right){
        return
    }
    let mid = partition(arr,left,right)
    sortString(arr,left,mid -1)
    sortString(arr,mid + 1,right)
    return arr
}

function partition(arr,left,right){
    let pivot = arr[left]
    let swapIndex = left
    for(let i = left ; i <= right ; i++){
        if(arr[i] < pivot){
            swapIndex++
            if(i != swapIndex){
                [arr[i],arr[swapIndex]] = [arr[swapIndex],arr[i]]
            }
        }
    }
    if(swapIndex != left){
        [arr[left],arr[swapIndex]] = [arr[swapIndex],arr[left]]
    }
    return swapIndex
}

console.log(sortString(array))