const MaxHeap = require('./maxheapmod')

function findKLargest(arr,k){
    const max = new MaxHeap()
    arr.forEach(element => {
       max.insert(element) 
    });
    return max.heap[k-1] ? max.heap[k - 1] : -1
}

console.log(findKLargest([0,3,8,2,1,5,4,7,6],3))