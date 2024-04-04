const MinHeap = require('./minheapmod')

function findKSmall(arr,k){
    const min = new MinHeap()
    arr.forEach(element => {
       min.insert(element) 
    });
    return min.heap[k-1] ? min.heap[k - 1] : -1
}

console.log(findKSmall([4,1,8,3,0,2],2))