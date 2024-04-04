const persons = [{ name: 'Razal', age: 30 },{ name: 'Ashin', age: 25 },{ name: 'Jithu', age: 35 },
    { name: 'Dalvin', age: 25 },{ name: 'Vrishab', age: 25 },{ name: 'Geo', age: 25 },{ name: 'Amal', age: 25 },];
function sortObjectHeap(arr){
    let len = arr.length
    for(let i = Math.floor(len/2) - 1 ; i >= 0 ; i--){
        heapify(arr,len,i)
    }
    for(let i = len - 1 ; i >= 0 ; i--){
        [arr[i],arr[0]] = [arr[0],arr[i]]
        heapify(arr,i,0)
    }
    return arr
}
function heapify(arr,n,i){
    let largest = i
    let leftChild = 2 * i + 1
    let rightChild = 2 * i + 2
    if( leftChild < n && arr[leftChild].name > arr[largest].name){
        largest = leftChild
    }
    if(rightChild < n && arr[rightChild].name > arr[largest].name){
        largest = rightChild
    }
    if(largest != i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}
console.log(sortObjectHeap(persons))

