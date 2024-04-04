let array = ['banana', 'apple', 'orange', 'grapes','kiwi','avocado', 'pineapple']
function sortLengthHeap(arr){
    let len = arr.length
    for(let i = Math.floor(len/2)-1 ; i >= 0 ; i--){
        heapify(arr,len,i)
    }
    for(let i = len - 1 ; i > 0 ; i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}
function heapify(arr,n,i){
    let largest = i
    let leftChild = 2 * i + 1
    let rightChild = 2 * i + 2
    if(leftChild < n && arr[leftChild].length > arr[largest].length){
        largest = leftChild
    }
    if(rightChild < n && arr[rightChild].length > arr[largest].length){
        largest = rightChild
    }
    if(largest != i){
        [arr[largest],arr[i]] = [arr[i],arr[largest]]
        heapify(arr,n,largest)
    }
}

console.log(sortLengthHeap(array))