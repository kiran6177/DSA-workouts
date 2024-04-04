let array = ['banana', 'apple', 'orange', 'grapes','kiwi','avocado', 'pineapple']

function sortLength(arr,left = 0,right = arr.length - 1){
    if(left > right){
        return
    }
    let mid = partition(arr,left,right)
    sortLength(arr,left,mid - 1)
    sortLength(arr,mid + 1, right)
    return arr
}

function partition(arr,left,right){
    let pivot = arr[left]
    let swapIndex = left
    for(let i = left ; i <= right ; i++){
        if(arr[i].length < pivot.length){
            swapIndex++
            if(swapIndex != i){
                [arr[i],arr[swapIndex]] = [arr[swapIndex],arr[i]]
            }
        }
    }
    if(swapIndex != left){
        [arr[swapIndex],arr[left]] = [arr[left],arr[swapIndex]]
    }
    return swapIndex
}

console.log(sortLength(array))